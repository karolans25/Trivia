# Bootcamp-Laboratoria-squad-1.3
Repositorio para mostrar los avances del bootcamp de laboratoria en el proyecto de realizar una Trivia
Para este proyecto se instalaron algunos paquetes de python y un ambiente virtual para utilizar de python
de manera local. La carpeta donde se encuentra está oculta (**.venv**). Para correr el servidor de python 
que se encarga de leer los archivos .txt de la base de datos en el directorio **datos**.

                pip3 install virtualenv
                python3 -m virtualenv .venv
                source .venv/bin/activate
                pip install flask
                pip install flask-cors

Desde la terminal en el directorio hito_4 ejecutar en terminal para activar el ambiente virtual

                source .venv/bin/activate

Ahora ejecutamos el archivo del servidor de python con flask que tiene solo un route get
                
                python app.py

Ahora que se tiene el servidor de python *running* podemos lanzar el index.html en el navegador


# Proyecto Trivia!

En este proyecto se tienen 4 hitos, es decir, 4 versiones funcionales con distintos niveles de complejidad.

#### Tema de la Trivia
Debido a que las colaboradoras del proyecto son de dos países diferentes: **México** y **Colombia** decidimos hacer la trivia sobre temas comidas y bebidas típicas de cada uno de los países.



## Hito 1

Comienza intentando hacer la versión más simple de una trivia.

- 1 sola pantalla o vista.
- 2 preguntas con, al menos, 3 alternativas de respuesta cada una.
- 1 botón para responder y ver cuál es la alternativa correcta.
- No te dice si acertaste o no, sólo te dice cuál alternativa era la correcta.


### Flujo de Trabajo
Inicialmente cada una propuso en papel un esqueleto de cómo se imaginaba la trivia. Luego utilizando [miró](https://www.miro.com) se definió la estructura principal para mostrar las preguntas.

!(Hito 1-1)[./imgs/hito1\_1.png]

Durante la preparación de la estructura plana en *html* y por temas de tiempo se decidió desplegar las preguntas una debajo de la otra en lugar de inline como en la idea inicial.  



#### Sugerencia de micro-proyecto A: Prueba hacer el "esqueleto" estático en HTML

Una interfaz básica con:

* Dos preguntas con sus respectivas alternativas de respuesta en forma de radio buttons
* El botón para “Responder y ver resultados”.

#### Sugerencia de micro-proyecto B: Prueba darle algo de interacción

Cuando la usuaria dé click en alguno de los radio button, muéstrale un mensaje de alerta (alert) en el navegador que contenga el valor (texto) del radio button cliqueado.

**Pista:** Para mostrar un mensaje de alerta básico hay una función de JavaScript llamada “alert”. Esta función puede “escuchar” eventos del navegador como click y hacer algo cuando suceda usando onclick o addEventListener.


#### Sugerencia de micro-proyecto C: Prueba darle interacción más cercana a la que pide el proyecto

En lugar de mostrar el valor de cada radio button cuando se le hace click, que esta vez solamente se marque el radio button seleccionado y que el mensaje alert con los valores de los radio button seleccionados se muestre cuando al hacer click en el botón “Responder y ver resultados”.



### Hito 2

Agrega una pantalla simple de bienvenida con los siguientes elementos y características:

* Una caja de texto (input text) en la que escribe su nombre quien juega.
* Un botón de "jugar" o "comenzar" para ir a las preguntas.
* Esta vez deberán haber al menos 3 preguntas con sus respectivas alternativas de respuesta.
* Antes de las peguntas debe decir "Hola \[el nombre que se escribió en la pantalla de bienvenida\]"
* El botón para responder muestra la alternativa correcta para cada pregunta y, además, muestra si cada una de las respuestas fue correcta o incorrecta.
* Un botón para volver a jugar que vuelve a la pantalla inicial en la que se pide el nombre.

#### Sugerencia de micro-proyecto: Prueba evaluar las respuestas de tu usuaria

Para determinar si las respuestas seleccionadas son correctas o incorrectas, necesitas predefinir cuál alternativa es la correcta para cada pregunta y evaluar (comparar) si la respuesta de tu usuaria coincide o no.

Pista: Lee sobre condicionales y control de flujo (if, else, else if).


### Hito 3

Permítele a la usuaria elegir entre 2 tipos de preguntas después de escribir su nombre y antes de ir a responder. 
Por ejemplo, unas sobre comida y otras sobre cervezas. Agrega un puntaje a respuestas correctas e incorrectas y 
muestra un puntaje total al final.


### Hito 4

Si hiciste todo lo anterior y tienes un poco más de tiempo, decide qué más quisieras hacer para mejorar tu proyecto. 
Podrías, por ejemplo:

* Agregar una cuenta regresiva con un tiempo límite para responder cada pregunta. Para lograrlo, les dejamos una 
pista de javascript.
* Subir tu código a GitHub (commit/push) y desplegar la interfaz usando GitHub pages.


        pip install flask
        pip install --upgrade watchdog

[Ayuda con Python (Flask) y Javascript](https://dataanalyticsireland.ie/es/2021/12/13/como-pasar-una-variable-javascript-a-python-usando-json/)

[Preguntas de html](<!--https://unipython.com/las-60-preguntas-y-respuestas-mas-frecuentes-de-html-y-html5/#google_vignette-->
)
