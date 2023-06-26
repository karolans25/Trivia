/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
// console.log("Hello 🌎");

/**
let tipos = ["Comidas", "Bebidas", "Dulces"];

let preguntas = [ ["1. ¿Cuáles son dulces típicos de México?",
                   "2. ¿Cuáles son dulces típicos de Colombia?",
                   "3. ¿Cuáles son comidas típicas de Colombia?"
                  ],
                  ["1. ¿Cuáles son bebidas frías típicas de México?",
                   "2. ¿Cuáles son bebidas frías típicas de Colombia?",
                   "3. ¿Cuáles son bebidas calientes típicas de Colombia?",
                   "4. ¿Cuáles son bebidas calientes típicas de México?"
                  ],
                  ["1. ¿Cuáles son bebidas frías típicas de México?",
                   "2. ¿Cuáles son bebidas frías típicas de Colombia?"
                  ]
                ];

let opciones = [  [ ["Suspiro, turrón, alfajor", 
                     "Papajotes, torrijas, churros", 
                     "Borrachito, alegría, tarugos"],
                    ["Cucas, manjar blanco, alfandoques",
                     "Éclair, charlotte, coulant de chocolate", 
                     "Muéganos, ate, palanquetas, camotes"],
                    ["Bratwurst, pretzel, schnitzel", 
                     "Tacos, mole, chilaquiles", 
                     "Bandeja paisa, ajiaco, mote de queso"]
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
                  ],
                  [ ["Guaraná, jugo de caña, pulque",
                     "Pozol, pulque, tepache",
                     "Los e y los f"],
                    ["Limoncello, sambuca, fernet",
                     "Lulada, campús, jugo de borojó",
                     "Trascalate, cebadina, tejuino"]
                  ]
                ];

//let correctas = [[2, 0, 2, 1], [1, 1, 2, 0]];
//let correctas = [[2, 0, 2], [1, 1, 2, 0]];
let correctas = [[2, 0, 2], [1, 1, 2, 0], [0, 0]];
*/

let tipos = [];
let preguntas = [];
let opciones = [];
let correctas = [];

let escogido = 0;

let nombre = "";

let puntaje = 0;

let maxPuntaje = 100;

let port = 8080;

function mostrar(n){
  nombre = n;
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
  //Pone por defecto el valor del input text
  document.getElementById("nombreL").value = "";
  document.getElementById("bienvenida").innerHTML = "¿Quieres empezar a jugar?";

  const requestURL = `http://localhost:${port}`;
  const request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    const data = request.response;
    //datos = superHeroes;
    console.log(data.length);
    crearArreglos(data);
    //populateHeader(superHeroes);
    //showHeroes(superHeroes);
  }

}

function login(){
  reiniciar();
  document.getElementById("nombreL").value = nombre;
  //Modifica el valor del mensaje de bienvenida
  //document.getElementById("bienvenida").innerHTML = "¿Quieres empezar a jugar?";
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
  if (document.getElementById("selectorT")){
    document.getElementById("selectorT").remove();
  }
  if (document.getElementById("buttonT")){
    document.getElementById("buttonT").remove();
  }
  if (document.getElementById("trivia")){
    document.getElementById("trivia").remove();
  }

  /*
  $(document).ready(function(){
    const Url = `http://localhost:${port}`;
    $.ajax({
      url: Url,
      type: "GET",
      success: function(result){
        datos = result;
        //console.log(result);
      },
      error: function(error){
        console.log(`Error ${error}`)
      }
    })
  })
  */
  
  let divSelector = document.getElementById("divSelector");
  let select = document.createElement("select");
  select.setAttribute("id", "selectorT");
  for (let tip in tipos){
    let op = document.createElement("option");
    op.setAttribute("value", tip);
    let opText = document.createTextNode(tipos[tip]);
    op.appendChild(opText);
    select.append(op);
  }
  divSelector.style.width = "60%";
  divSelector.appendChild(select);

  //Crea el botón de seleccionar el tipo de preguntas
  let divEscoger = document.getElementById("divEscoger");
  let button = document.createElement("input");
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
  let containerTrivia = document.getElementById("containerTrivia");
  containerTrivia.style.display = 'flex';
  //Crea el banco de preguntas 
  let trivia = document.createElement("div");
  trivia.className = "flex-container";
  trivia.id = "trivia";
  containerTrivia.appendChild(trivia);

  for (let i in preguntas[escogido]){
    let div = document.createElement("div");
    div.className = "flex-item";
    div.id = `flex-${i}`;
    trivia.appendChild(div);
    let p = document.createElement("p");
    p.id = `pregunta-${i}`;
    p.innerHTML = preguntas[escogido][i];
    div.append(p);
    div.append(document.createElement("br"));
    let pEmoji = document.createElement("p");
    pEmoji.id = `emoji-${i}`;
    pEmoji.innerHTML = "";
    div.append(pEmoji);
    div.append(document.createElement("br"));
    let ops = opciones[escogido][i];
    for (let j in ops){
      let input = document.createElement("input");
      input.type = "radio";
      input.id = `${p.id}.${j}`;
      input.value = j;
      input.name = p.id;
      let label = document.createElement("label");
      label.id = `op-${i}.${j}`;
      label.innerHTML = ops[j];
      label.setAttribute("for", input.id);
      label.setAttribute("name", input.id);
      div.append(input);
      div.append(label);
      div.append(document.createElement("br"));
    }
  }
}

function calificar() {
  //Esconde el botón de contestar y muestra el de reiniciar
  document.getElementById("reiniciar").style.display = 'flex';
  document.getElementById("contestar").style.display = 'none';
  
  puntaje = 0;
  let sumar = maxPuntaje/(preguntas[escogido].length);
  /**Inicia el proceso cuando se va a calificar */
  let total = preguntas[escogido].length;
  let contador = 0;
  
  while (contador < total){
    evaluar(contador, sumar);
    contador ++;
  }

  alert(`\t\t Gracias por participar!\n\n\t\t\t\tTu puntaje fue de ${puntaje.toFixed(2)}/${maxPuntaje.toFixed(2)}`);
}

function evaluar(contador, sumar){
  let selected = false;
  let items = document.getElementById(`flex-${contador}`);
  let radios = items.getElementsByTagName("input");
  let labels = items.getElementsByTagName("label");
  let ps = items.getElementsByTagName("p");
  let pEmoji = "";
  for (let i of ps){
    if (i.id.startsWith("emoji-")){
      pEmoji = i;
    }
  }
  for (let j in radios){
    if (radios[j].type === 'radio' && radios[j].checked){ 
      labels[j].style.backgroundColor = "red";
      labels[j].style.color = "yellow";

      labels[correctas[escogido][contador]].style.backgroundColor = "green";
      labels[correctas[escogido][contador]].style.color = "white";

      if(j != correctas[escogido][contador]){
        pEmoji.innerHTML = "\t🥺 ❌";
      } else {
        pEmoji.innerHTML = "\t🥰 ✅";
        puntaje += sumar;
      }
      selected = true;
    }
    if (radios[j].type === 'radio'){
      radios[j].setAttribute("disabled", "disabled");
    }
  }
  if (!selected) {
    pEmoji.innerHTML = "\t💬 ❌";
  }
}

function crearArreglos(data){
  tipos = [];
  preguntas = [], opciones = [], correctas = [];
  for (let key in data){
    tipos.push(key);
    let lasPreguntas = [], lasOpciones = [], lasCorrectas = [];
    for (let j = 1; j <= Object.keys(data[key]).length; j++ ){
      lasPreguntas.push(data[key][`pregunta-${j}`]["name"]);
      lasOpciones.push(data[key][`pregunta-${j}`]["opciones"]);
      lasCorrectas.push(data[key][`pregunta-${j}`]["correcta"]);
    }
    preguntas.push(lasPreguntas);
    opciones.push(lasOpciones);
    correctas.push(lasCorrectas);
  }
}