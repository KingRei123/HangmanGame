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
        return redirect(url_for('play', username=username))
    return render_template('charSelect.html')

@app.route('/game/<username>', methods=['POST', 'GET'])
def play(username):
    if username == None:
        return render_template('charSelect.html')
    return render_template('game.html', username=username)
    


    


@app.route('/about')
def about():
    return render_template('about.html')

if '__main__' == __name__:
    app.run()


