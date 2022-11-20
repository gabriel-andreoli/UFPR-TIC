from flask import Flask, redirect, render_template, request, flash
from conf import email_pessoal, senhaAPI
import smtplib
import email.message

app = Flask(__name__)
app.secret_key = 'gabriandreoli'


class Contato:
    def __init__(self, nome, email_usuario, mensagem):
        self.nome = nome
        self.email_usuario = email_usuario
        self.mensagem = mensagem


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/send', methods=['GET', 'POST'])
def send():
    if request.method == 'POST':
        formContato = Contato(
            request.form["nome"],
            request.form["email_usuario"],
            request.form["mensagem"]
            )

        corpo_email = f"""
        <p>{formContato.nome} com o email {formContato.email_usuario} te enviou a seguinte mensagem:</p>
        <p>{formContato.mensagem}</p>
        """

        msg = email.message.Message()
        msg['Subject'] = "Mensagem do Site Pessoal"
        msg['From'] = email_pessoal
        msg['To'] = email_pessoal
        password = senhaAPI 
        msg.add_header('Content-Type', 'text/html')
        msg.set_payload(corpo_email)

        s = smtplib.SMTP('smtp.gmail.com: 587')
        s.starttls()
        # Login Credentials for sending the mail
        s.login(msg['From'], password)
        s.sendmail(msg['From'], [msg['To']], msg.as_string().encode('utf-8'))
        flash('Mensagem enviada com sucesso!')
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)
