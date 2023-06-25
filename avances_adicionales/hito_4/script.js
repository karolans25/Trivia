/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
// console.log("Hello 🌎");

let tipos = ["Comidas", "Bebidas"];

let escogido = 0;

let preguntas = [ ["1. ¿Cuáles son dulces típicos de México?",
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

let opciones = [  [ ["Suspiro, turrón, alfajor", 
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

let correctas = [[2, 0, 2, 1], [1, 1, 2, 0]];

let nombre = "";

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
}

function login(){
  reiniciar();
  document.getElementById("nombreL").value = nombre;
  //Modifica el valor del mensaje de bienvenida
  document.getElementById("bienvenida").innerHTML = "¿Quieres empezar a jugar?";
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
  let trivia = document.getElementById("containerTrivia");
  trivia.style.display = 'flex';
  //Crea el banco de preguntas 
  for (let i in preguntas[escogido]){
    if (document.getElementById(`flex-${i}`)){
      document.getElementById(`flex-${i}`).remove();
    }
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
  
  /**Inicia el proceso cuando se va a calificar */
  let selected = false;
  let puntaje = 0;
  let sumar = 100/(preguntas[escogido].length);

  for (let i in preguntas[escogido]){
    let pre = `pregunta-${i}`;
    let pEmoji = document.getElementById(`emoji-${i}`);
    let radios = document.getElementsByName(pre);
    for (let j in radios){
      if (radios[j].type === 'radio' && radios[j].checked){ 
        let labelRadio = document.getElementById(`op-${i}.${radios[j].value}`);
        let labelCorrecta = document.getElementById(`op-${i}.${correctas[escogido][i]}`);
        labelCorrecta.style.backgroundColor = "green";
        labelCorrecta.style.color = "white";

        if(j != correctas[escogido][i]){
          labelRadio.style.backgroundColor = "red";
          labelRadio.style.color = "yellow";
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
    selected = false;
  }
  alert(`\t\t Gracias por participar!\n\n\t\t\t\tTu puntaje fue de ${puntaje}/100`);
}