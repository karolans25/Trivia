/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
// console.log("Hello 🌎");

var tipos = ["Comidas", "Bebidas"];

escogido = 0;

var preguntas = [ ["1. ¿Cuáles son dulces típicos de México?",
                   "2. ¿Cuáles son dulces típicos de Colombia?",
                   "3. ¿Cuáles son comidas típicas de Colombia?",
                   "4. ¿Cuáles son comidas típicas de México?"
                  ],
                  ["1. ¿Cuáles son bebidas frías típicas de México?",
                   "2. ¿Cuáles son bebidas frías típicas de Colombia?",
                   "3. ¿Cuáles son bebidas calientes típicas de Colombia?",
                   "4. ¿Cuáles son bebidas calientes típicas de México?"
                  ]
                ];

var opciones = [  [ ["Suspiro, turrón, alfajor", 
                     "Papajotes, torrijas, churros", 
                     "Borrachito, alegría, tarugos"],
                    ["Cucas, manjar blanco, alfandoques",
                     "Éclair, charlotte, coulant de chocolate", 
                     "Muéganos, ate, palanquetas, camotes"],
                    ["Bratwurst, pretzel, schnitzel", 
                     "Tacos, mole, chilaquiles", 
                     "Bandeja paisa, ajiaco, mote de queso"],
                    ["Asado, locro, empanadas", 
                     "Pozole, cochinita pibil, tlayuda", 
                     "Mandioca, chipa, araticú"]
                  ],
                  [ ["Guaraná, jugo de caña, pulque",
                     "Pozol, pulque, tepache",
                     "Los e y los f"],
                    ["Limoncello, sambuca, fernet",
                     "Lulada, campús, jugo de borojó",
                     "Trascalate, cebadina, tejuino"],
                    ["Carato, papelón con limón, tizana",
                     "Chocolate, atole negro, ponche",
                     "Canelazo, aguadepanela, chocolate"],
                    ["Los a y los b",
                     "Los c y los d",
                     "Los e y los f"]
                  ]
                ];

var correctas = [[2, 0, 2, 1], [1, 1, 2, 0]];

var nombre = "";

function mostrar(n){
  nombre = n;
  //console.log(nombre);
}

function reiniciar(){
  //Esconde los div y container
  document.getElementById("containerTrivia").style.display = 'none';
  document.getElementById("contestar").style.display = 'none';
  document.getElementById("reiniciar").style.display = 'none';
  document.getElementById("escoger").style.display = 'none';
  //Muestra los div y container de esta vista
  document.getElementById("login").style.display = 'flex';
  document.getElementById("bienvenida").style.display = 'flex';
  //document.getElementById("bienvenida").style.display = 'block';
  //Modifica el valor del mensaje de bienvenida
  document.getElementById("bienvenida").innerHTML = "¿Quieres empezar a jugar?";
  //var divSelector = document.getElementById("divSelector");
  if (document.getElementById("selectorT")){
    document.getElementById("selectorT").remove();
  }
  if (document.getElementById("buttonT")){
    document.getElementById("buttonT").remove();
  }
  //Pone por defecto el valor del input text
  document.getElementById("nombreL").value = "";
}

function login(){
  reiniciar();
  //Modifica el valor input text del nombre en tiempo real
  //nombre = nombre.toUpperCase().toLowerCase();
  //nombre = nombre.charAt(0).toUpperCase().concat(nombre.substring(1, nombre.length));
  document.getElementById("nombreL").value = nombre;
  alert ("Hola " + nombre);
  seleccionar();
}

function seleccionar(){
  //Muestra y esconde los div de la vista
  document.getElementById("login").style.display = 'none';
  document.getElementById("escoger").style.display = 'flex';
  //Cambia el mensaje de la vista
  document.getElementById("bienvenida").innerHTML = "Escoge el tema de las preguntas";

  //Crea y agrega un selector con las opciones de los tipos de preguntas
  var divSelector = document.getElementById("divSelector");
  var select = document.createElement("select");
  select.setAttribute("id", "selectorT");
  for (var tip in tipos){
    var op = document.createElement("option");
    op.setAttribute("value", tip);
    let opText = document.createTextNode(tipos[tip]);
    op.appendChild(opText);
    select.append(op);
  }
  divSelector.appendChild(select);

  //Crea el botón de seleccionar el tipo de preguntas
  var divEscoger = document.getElementById("divEscoger");
  var button = document.createElement("input");
  button.type = "button";
  button.id = "buttonT";
  button.value = "Escoger";
  button.setAttribute("onclick", "jugar(); return false");
  divEscoger.appendChild(button);
}

function jugar(){
  escogido = document.getElementById("selectorT").value;
  const msg = document.getElementById("bienvenida");
  msg.innerHTML = `Bienvenida, ${nombre}! Ahora si vamos a jugar!`;

  //Organiza la vista del juego (visibilidad de elementos)
  document.getElementById("escoger").style.display = 'none';
  document.getElementById("containerTrivia").style.display = 'flex';
  document.getElementById("contestar").style.display = 'flex';
  onLoad();
}

function onLoad(){
  var lasPreguntas = preguntas[escogido];
  var lasOpciones = opciones[escogido];
  for (var i in lasPreguntas){
    var pre = `pregunta-${parseInt(i)+1}`;
    const pPreguntas = document.getElementById(pre);
    const radios = document.getElementsByName(pre);
    //Modificar el valor de las etiquetas que son para pregunta
    pPreguntas.innerHTML = lasPreguntas[i];
    for (var j in lasOpciones[i]){
      var opc = `op-${parseInt(i) +1}.${parseInt(j) +1}`;
      const laOpcion = document.getElementById(opc);
      laOpcion.style.backgroundColor = "var(--color-bg)";
      laOpcion.style.color = "black";
      radios[j].checked = false;
      laOpcion.innerHTML = lasOpciones[i][j];
      radios[j].value = lasOpciones[i][j];
    }
    //radios.forEach(element => element.setAttribute("disabled", false));
  }
}

function evaluarRespuestas() {
  //Esconde el botón de contestar y muestra el de reiniciar
  document.getElementById("reiniciar").style.display = 'flex';
  document.getElementById("contestar").style.display = 'none';
  
  /**Inicia el proceso cuando se va a calificar */
  var respuestas = [];
  var selected = false;
  var output = "";
  var puntaje = 100;

  var lasPreguntas = preguntas[escogido];
  var lasOpciones = opciones[escogido];
  for (var i in lasPreguntas){
    var pre = `pregunta-${parseInt(i)+1}`;
    var pEmoji = document.getElementById(pre);
    var radios = document.getElementsByName(pre);
    for (var radio of radios){
      if (radio.type === 'radio' && radio.checked){ //&& lasOpciones.indexOf(radio.value) != -1){
        var labelRadio = document.getElementById(`op-${parseInt(i)+1}.${lasOpciones[i].indexOf(radio.value)+1}`);
        var labelCorrecta = document.getElementById(`op-${parseInt(i)+1}.${correctas[escogido][i]+1}`);
        labelCorrecta.style.backgroundColor = "green";
        labelCorrecta.style.color = "white";

        if (lasOpciones[i].indexOf(radio.value)!= correctas[escogido][i]){
          labelRadio.style.backgroundColor = "red";
          labelRadio.style.color = "yellow";
          pEmoji.append("\t🥺 ❌");
          puntaje -= (100/lasPreguntas.length);
        } else if (lasOpciones[i].indexOf(radio.value) == correctas[escogido][i]){
          pEmoji.append("\t🥰 ✅");
        }
        selected = true;
      }
      //radio.setAttribute("disabled", "disabled");
    }
    if (!selected) {
      pEmoji.append("\t💬 ❌");
      puntaje -= (100/lasPreguntas.length);
      //labelCorrecta.style.backgroundColor = "yellow";
      //labelCorrecta.style.color = "blue";
      //respuestas.push([parseInt(i)+1, "No ha respondido"]);
      //alert('No ha respondido la pregunta ' + (parseInt(i)+1).toString());
    }
    selected = false;
  }
  alert(`\t\t Gracias por participar!\n\n\t\t\t\tTu puntaje fue de ${puntaje}/100`);
  /*
  for (var respuesta of respuestas){
    output += "Respuesta a la pregunta " + respuesta[0] + ":\n\t" + respuesta[1] + "\n\n";
  }
  alert(output); 
  */

}


/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
/*
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}

// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});

*/
