#from flask import request, Flask, render_template
from flask import Flask
from flask_cors import CORS
import json

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


app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return datos

if __name__ == "__main__":
    app.run(debug=True, port=8080)

