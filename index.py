from flask import Flask, render_template, request

app = Flask(__name__)

# app = Flask(__name__)

# Set the template folder to the "templates" directory
app.template_folder = 'template'
port = 3000  # You can use any port you prefer

@app.route('/')
def index():
    return render_template('2.html')  # Use '2.html' for HTML templates

@app.route('/execute', methods=['POST'])
def execute():
    name = request.form['input_value1']
    date = request.form['input_value2']
    cost = request.form['input_value3']
    print(name)
    print(date)
    print(cost)
    params = {'content': 'success'}
    return render_template('2.html')  # Use '2.html' for HTML templates

if __name__ == '__main__':
    app.run(debug=True, port=port)
