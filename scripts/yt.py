"""YouTube Data API v3 도우미 (04 Now Hot 섹션용, 2026-11-08).

  python scripts/yt.py search "AI 에이전트" --lang ko --region KR --days 8 [--max 10]
  python scripts/yt.py meta VIDEO_ID[,VIDEO_ID...]

검색 결과·메타데이터(제목·채널·게시일·조회수·길이·설명란)를 JSON 으로 출력한다.
환경변수 YOUTUBE_API_KEY 가 없거나 API 호출이 실패하면 종료 코드 2 → 스킬은 WebSearch/WebFetch 로 대신한다.
클라우드 IP 에서는 자막 수집이 자주 막히므로 자막은 쓰지 않고 설명란을 근거로 한다.
"""
import argparse
import json
import os
import re
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone

API = "https://www.googleapis.com/youtube/v3/"


def call(endpoint, **params):
    key = os.environ.get("YOUTUBE_API_KEY", "").strip()
    if not key:
        print("YOUTUBE_API_KEY 없음 — WebSearch/WebFetch 로 대신할 것", file=sys.stderr)
        sys.exit(2)
    params["key"] = key
    try:
        with urllib.request.urlopen(API + endpoint + "?" + urllib.parse.urlencode(params), timeout=30) as r:
            return json.load(r)
    except Exception as e:  # 키 오류·API 꺼짐·할당량 초과 → 웹 검색으로 대신하도록 종료 코드 2
        print(f"YouTube API 실패 ({e}) — WebSearch/WebFetch 로 대신할 것", file=sys.stderr)
        sys.exit(2)


def dur(iso):
    m = re.match(r"PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?", iso or "")
    h, mi = int(m.group(1) or 0), int(m.group(2) or 0)
    return f"{h}시간 {mi}분" if h else f"{mi}분"


def views(n):
    n = int(n or 0)
    return f"{n // 10000}만회" if n >= 10000 else f"{n:,}회"


def main():
    p = argparse.ArgumentParser()
    sub = p.add_subparsers(dest="cmd", required=True)
    s = sub.add_parser("search")
    s.add_argument("q")
    s.add_argument("--lang", default="ko")
    s.add_argument("--region", default="KR")
    s.add_argument("--days", type=int, default=8)
    s.add_argument("--max", type=int, default=10)
    m = sub.add_parser("meta")
    m.add_argument("ids")
    a = p.parse_args()

    if a.cmd == "search":
        after = (datetime.now(timezone.utc) - timedelta(days=a.days)).strftime("%Y-%m-%dT%H:%M:%SZ")
        r = call("search", part="snippet", q=a.q, type="video", order="viewCount", publishedAfter=after,
                 relevanceLanguage=a.lang, regionCode=a.region, maxResults=a.max)
        out = [{"id": it["id"]["videoId"], "title": it["snippet"]["title"], "channel": it["snippet"]["channelTitle"],
                "published": it["snippet"]["publishedAt"][:10]} for it in r.get("items", [])]
    else:
        r = call("videos", part="snippet,statistics,contentDetails", id=a.ids)
        out = [{"id": it["id"], "title": it["snippet"]["title"], "channel": it["snippet"]["channelTitle"],
                "date": it["snippet"]["publishedAt"][:10].replace("-", "."),
                "views": views(it["statistics"].get("viewCount")), "duration": dur(it["contentDetails"]["duration"]),
                "url": f"https://www.youtube.com/watch?v={it['id']}",
                "thumbnail": f"https://i.ytimg.com/vi/{it['id']}/hqdefault.jpg",
                "description": it["snippet"].get("description", "")[:2000]} for it in r.get("items", [])]
    print(json.dumps(out, ensure_ascii=False, indent=1))


if __name__ == "__main__":
    main()
