from flask import Flask, render_template, redirect, request, url_for
from flask_debugtoolbar import DebugToolbarExtension
import hashlib

app = Flask(__name__)
app.secret_key = '123'
app.debug = True


toolbar = DebugToolbarExtension(app)

words = ['test', 'rei']


@app.route('/', methods=['POST','GET'])
def index():
    return render_template('index.html')


@app.route('/game', methods = ['POST','GET'])
def game():
    if request.method == 'POST':  
        username = request.form['username']
        choosenWords = request.form['guess']
        return redirect(url_for('play', username=username, choosenWords=choosenWords))
    return render_template('game.html')


@app.route('/playgame/<username>/<choosenWords>', methods=['POST', 'GET'])
def play(username, choosenWords):
    lengh_answer = int(len(choosenWords))
    if lengh_answer == 0:
        return "Error"
    return render_template('playGame.html', username=username, lengh_answer=lengh_answer, choosenWords=choosenWords)


@app.route('/about')
def about():
    return render_template('about.html')

if '__main__' == __name__:
    app.run()


