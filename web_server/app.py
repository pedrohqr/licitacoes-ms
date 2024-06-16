from flask import Flask, render_template, request

app = Flask(__name__,
            static_folder='static',
            template_folder='templates')

@app.route("/", methods=['GET', 'POST'])
def index(question="", answer=""):
    if request.method == 'GET':
        return render_template('index.html', answer=answer, question=question)
    elif request.method == 'POST':
        print(request.form['answer'])
        print(request.form['question'])
        return render_template('index.html', answer=request.form['answer'], question=request.form['question'])