from crypt import methods
from flask import Flask , render_template , url_for ,redirect

app = Flask(__name__)

@app.route("/" , methods = ['GET','POST'])
def home():
    return render_template("welcome2.html")

@app.route("/index" , methods =['GET','POST'])
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)