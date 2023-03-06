from flask import Flask, render_template, redirect, request, url_for
from flask_debugtoolbar import DebugToolbarExtension
import random

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
        choosenWords = []
        return redirect(url_for('chooseWords', username=username))
    return render_template('game.html')

@app.route('/chooseWords')
def chooseWords():
    words = ['test', 'rei']
    choosenWords = []
    return render_template('chooseWord.html', choosenWords=choosenWords, words=words)

@app.route('/playgame/<username>/<choosenWords>', methods=['POST', 'GET'])
def play(username, choosenWords):
    guess = 6
    guessWords = []
    choosenWords = ['hello']
    gameWon = False
    if len(choosenWords) == 0:
        return render_template('chooseWord.html', words=words)
    if request.method == 'POST':
        check = ''
        wordsToGuess = words[random.randint(0,1)]
        answer = request.form['answer']
        if answer == wordsToGuess:
            check = "You Win"
        else:
            check = "You Lose"
        return render_template('checkGame.html', answer=answer, words=words, wordsToGuess=wordsToGuess, check=check)
    return render_template('playGame.html', username=username)


@app.route('/about')
def about():
    return render_template('about.html')

if '__main__' == __name__:
    app.run()


