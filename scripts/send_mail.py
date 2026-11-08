"""주간 AI 브리핑 메일 발송 (Gmail SMTP, 2026-11-08).

사용: python scripts/send_mail.py --to "a@x.com, b@y.com" --subject "..." --html out/D_email.html --attach out/AI_Briefing_D.html
발신 계정은 환경변수 EMAIL_SENDER / EMAIL_PASSWORD(Gmail 앱 비밀번호). 재시도·포트 폴백은 mailer.py (Invest 와 같은 모듈).
"""
import argparse
import os
import sys
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.utils import formatdate, make_msgid

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import mailer  # noqa: E402


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--to", required=True)
    p.add_argument("--subject", required=True)
    p.add_argument("--html", required=True)
    p.add_argument("--attach")
    a = p.parse_args()

    sender = os.environ["EMAIL_SENDER"]
    password = os.environ["EMAIL_PASSWORD"]
    to = [x.strip() for x in a.to.split(",") if x.strip()]
    if not to:
        sys.exit("수신자 없음")

    msg = MIMEMultipart("mixed")
    msg["From"] = sender
    msg["To"] = ", ".join(to)
    msg["Subject"] = a.subject
    msg["Date"] = formatdate(localtime=True)
    msg["Message-ID"] = make_msgid(domain="gmail.com")
    with open(a.html, encoding="utf-8") as f:
        msg.attach(MIMEText(f.read(), "html", "utf-8"))
    if a.attach:
        with open(a.attach, encoding="utf-8") as f:
            part = MIMEText(f.read(), "html", "utf-8")
        part.add_header("Content-Disposition", "attachment", filename=os.path.basename(a.attach))
        msg.attach(part)

    mode = mailer.send(sender, password, to, msg.as_string())
    print(f"메일 발송 완료: 수신 {len(to)}명, 방식 {mode}, 첨부 {'O' if a.attach else 'X'}")


if __name__ == "__main__":
    main()
