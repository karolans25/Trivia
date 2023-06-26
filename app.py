# Paso 1 - En Python crear una aplicación
import json
from flask import request
from flask import Flask, render_template

app = Flask(__name__)

# Paso 2 - Crear la ruta web para indicar al programa cómo se llama la plantilla HTML .
@app.route('/')
def index():
    return render_template('index.html')

# Paso 3 - Crear la lógica que recibirá los datos del JSON en el sitio web.
@app.route('/test', methods=['POST'])
def test():
    output = request.get_json()
    print(output) # This is the output that was stored in the JSON within the browser
    print(type(output))
    result = json.loads(output) #this converts the json output to a python dictionary
    print(result) # Printing the new dictionary
    print(type(result))#this shows the json converted as a python dictionary
    return result

# En lo anterior explicaremos la lógica:
# /test ===> esto es lo que la página más adelante la lógica se verá para enviar los datos introducidos en el sitio web a.
# methods=['POST'] ===> Esto es lo que se busca cuando se envía el JSON.
# Como se puede ver en la función, el resto del código sólo recupera los datos y los procesa.

# Paso 4 - Crear el archivo HTML que capturará la entrada y procesará los datos a JSON.
