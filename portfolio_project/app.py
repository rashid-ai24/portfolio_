from flask import Flask, render_template, request
from flask_mail import Mail, Message

app = Flask(__name__)

app.config.update(
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT=465,
    MAIL_USE_SSL=True,
    MAIL_USERNAME='moh.rashid.3557@gmail.com',
    MAIL_PASSWORD='yczi nmcj hcwp xuij',
    MAIL_DEFAULT_SENDER=('Portfolio Contact', 'moh.rashid.3557@gmail.com')
)

mail = Mail(app)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/send", methods=["POST"])
def send_message():
    name = request.form["name"]
    email = request.form["email"]
    message = request.form["message"]

    msg = Message(
        subject=f"Portfolio Message from {name}",
        recipients=["moh.rashid20006@gmail.com"]
    )
    msg.body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
    mail.send(msg)

    return "✅ Message sent successfully!"

if __name__ == "__main__":
    app.run(debug=True)
