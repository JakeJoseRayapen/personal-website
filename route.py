from flask import Flask , render_template,request, url_for , redirect
from flask_mail import Mail,Message

app = Flask(__name__)
app.config['MAIL_SERVER'] ='smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'jakerayapenn@gmail.com'
app.config['MAIL_PASSWORD'] = 'hayabusa1'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
mail = Mail(app)

@app.route("/" , methods = ['GET','POST'])
def home():
    return render_template("welcome.html")

@app.route("/index" , methods =['GET','POST'])
def index():
    if request.method == 'POST':
        msg = request.form.get('message')


        message = Message("subject",sender="jakerayapenn@gmail.com",recipients=['jakerayapen@hotmail.com'])
        message.body = msg
        mail.send(message)       
        return redirect(url_for('index')) 
    else:

        return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True) 