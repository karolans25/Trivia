#from flask import request, Flask, render_template
from flask import Flask
from flask_cors import CORS
import json

#docs = ["datos/html.txt", "datos/javascript.txt", "datos/css.txt"]
docs = ["datos/html.txt", "datos/javascript.txt"]

def read(file):
    f = open(file, "r")
    lineas = f.readlines()
    limit = int((len(lineas)+1)/5)
    preguntas = {}

    for i in range(limit):
        thisdict =  { "name" : lineas[i*5][:-1], 
                      "opciones" : [lineas[i*5 +1][:-1], lineas[i*5 +2][:-1], lineas[i*5 +3][:-1]],
                      "correcta": lineas[i*5 +4][:-1] 
                    }
        preguntas[f'pregunta-{i+1}'] = thisdict
    #datos = {docs[0][6:-4]: preguntas}
    return preguntas

def init(docs):
    datos = dict()
    for i in docs:
        datos[i[6:-4]] = read(i)
    
    return datos


data = init(docs)

#print(datos)

with open('datos/html.json', 'w') as file:
    json.dump(data, file, indent=4)

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return data

if __name__ == "__main__":
    app.run(debug=True, port=8080)

