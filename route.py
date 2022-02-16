from flask import Flask , render_template

app = Flask(__name__)

@app.route("/" , methods = ['GET','POST'])
def home():
    return render_template("welcome2.html")

@app.route("/index" , methods =['GET','POST'])
def index():
    return render_template('index2.html')

if __name__ == '__main__':
    app.run(debug=True)