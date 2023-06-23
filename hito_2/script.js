
/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
// console.log("Hello 🌎");

var preguntas = ["1. ¿Cuáles son dulces típicos de México?",
                "2. ¿Cuáles son dulces típicos de Colombia?",
                "3. ¿Cuáles son comidas típicas de Colombia?",
                "4. ¿Cuáles son comidas típicas de México?"];

var opciones = [["Suspiro, turrón, alfajor", "Papajotes, torrijas, churros", "Borrachito, alegría, tarugos"],
               ["Cucas, manjar blanco, alfandoques", "Éclair, charlotte, coulant de chocolate", "Muéganos, ate, palanquetas, camotes"],
               ["Bratwurst, pretzel, schnitzel", "Tacos, mole, chilaquiles", "Bandeja paisa, ajiaco, mote de queso"],
               ["Asado, locro, empanadas", "Pozole, cochinita pibil, tlayuda", "Mandioca, chipa, araticú"]]

var correctas = [2, 0, 2, 1];

var nombre = "";

function onLoad(){
  for (var i in preguntas){
    var pre = "pregunta-" + preguntas[i][0];
    //console.log(pre);
    const p = document.getElementById(pre);
    const radios = document.getElementsByName(pre);
    //Modificar el valor de las etiquetas que son para pregunta
    p.innerHTML = preguntas[i];
    for (var j in opciones[i]){
      var opc = `op-${parseInt(i) +1}.${parseInt(j) +1}`;
      //console.log(opc);
      const o = document.getElementById(opc);
      o.innerHTML = opciones[i][j];
      o.style.backgroundColor = "var(--color-bg)";
      o.style.color = "black";
      radios[j].value = opciones[i][j];
      radios[j].checked = false;
      //console.log(radios[j].value);
    }
  }
}

function mostrar(n){
  nombre = n;
  //console.log(nombre);
}

function login(){
  document.getElementById("containerTrivia").style.display = 'none';
  document.getElementById("nombreL").value = "";
  document.getElementById("contestar").style.display = 'none';
  document.getElementById("reiniciar").style.display = 'none';
  document.getElementById("formNombre").style.display = 'flex';
  document.getElementById("bienvenida").style.display = 'flex';
  document.getElementById("bienvenida").innerHTML = "¿Quieres empezar a jugar?";
}

function jugar(){
  //let nombre = prompt ("¿Cómo te llamas?");
  //const textNombre = document.getElementById("nombreL");
  document.getElementById("bienvenida").style.display = 'block';
  const textNombre = document.getElementById("nombreL");
  nombre = nombre.toUpperCase().toLowerCase();
  nombre = nombre.charAt(0).toUpperCase().concat(nombre.substring(1, nombre.length));
  textNombre.value = nombre;
  //console.log(nombre);
  alert ("Hola " + textNombre.value);
  const msg = document.getElementById("bienvenida");
  msg.innerHTML = `Bienvenida, ${nombre}! Ahora si vamos a jugar!`;
  document.getElementById("containerTrivia").style.display = 'flex';
  document.getElementById("contestar").style.display = 'flex';
  document.getElementById("formNombre").style.display = 'none';
}

function contestar() {
  // Mostrar u ocultar lo que se necesite de la vista
  document.getElementById("reiniciar").style.display = 'flex';
  document.getElementById("contestar").style.display = 'none';
  
  /* Lógica del proceso */
  var selected = false;

  for (var i in preguntas){
    var pre = "pregunta-" + preguntas[i][0];
    var pEmoji = document.getElementById(pre);
    var radios = document.getElementsByName(pre);
    for (var radio of radios){
      if (radio.type === 'radio' && radio.checked){
        var labelR = `op-${parseInt(i)+1}.${opciones[i].indexOf(radio.value)+1}`;
        var labelRadio = document.getElementById(labelR);
        var labelCorrecta = document.getElementById(`op-${parseInt(i)+1}.${correctas[i]+1}`);
        labelCorrecta.style.backgroundColor = "green";
        labelCorrecta.style.color = "white";

        if (opciones[i].indexOf(radio.value) != correctas[i]){
          labelRadio.style.backgroundColor = "red";
          labelRadio.style.color = "yellow";
          pEmoji.append("\t🥺 ❌");
        } else if (opciones[i].indexOf(radio.value) == correctas[i]){
          pEmoji.append("\t🥰 ✅");
        }
        selected = true;
      }
      //radio.setAttribute("disabled", "disabled");
    }
    if (!selected) {
      pEmoji.append("\t💬 ❌");
    }
    selected = false;
  }
          
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
