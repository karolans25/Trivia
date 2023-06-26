from flask import Flask, render_template
import json
from requests_html import HTMLSession

app = Flask(__name__)

session = HTMLSession()
 
resp = session.get('https://trivia/datos')

resp.html.render()

docs = ["datos/html.txt", "datos/javascript.txt", "datos/css.txt"]

def read(file):
    f = open(file, "r")
    lineas = f.readlines()
    limit = int((len(lineas)+1)/5)
    preguntas = dict()

    for i in range(limit):
        thisdict =  { "name" : lineas[i*5], 
                      "opciones" : [lineas[i*5 +1], lineas[i*5 +2], lineas[i*5 +3]]
                    }
        preguntas[f'pregunta-{i+1}'] = thisdict
    return preguntas

datos = read(docs[0])

#print(datos)

with open('datos/html.json', 'w') as file:
    json.dump(datos, file, indent=4)

#print(preguntas['pregunta-60'])
"""open("datos/html.txt", "r")

@app.route('/')
def index():
    name = ['Joe','John','Jim','Paul','Niall','Tom']
    return render_template('index.html', name=name)

if __name__ == "__main__":
    app.run(debug=True, port=4000)

# En javascript
# test = {{ name | tojson }};
"""
