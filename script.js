/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
// console.log("Hello 🌎");

/*
var preguntas = ["1. ¿Cuáles son dulces típicos de México?",
                "2. ¿Cuáles son dulces típicos de Colombia?",
                "3. ¿Cuáles son comidas típicas de Colombia?",
                "4. ¿Cuáles son comidas típicas de México?"];

var opciones = [["Suspiro, turrón, alfajor", "Papajotes, torrijas, churros", "Borrachito, alegría, tarugos"],
               ["Cucas, manjar blanco, alfandoques", "Éclair, charlotte, coulant de chocolate", "Muéganos, ate, palanquetas, camotes"],
               ["Bratwurst, pretzel, schnitzel", "Tacos, mole, chilaquiles", "Bandeja paisa, ajiaco, mote de queso"],
               ["Asado, locro, empanadas", "Pozole, cochinita pibil, tlayuda", "Mandioca, chipa, araticú"]]
*/

var correctas = [[2, 0, 2, 1], [1, 1, 2, 0]];

var nombre = "";
var escogido = 0;

function mostrar(n){
  nombre = n;
}

function login(){
  document.getElementById("containerTrivia").style.display = 'none';
  document.getElementById("containerTrivia1").style.display = 'none';
  document.getElementById("nombreL").value = "";
  document.getElementById("contestar").style.display = 'none';
  document.getElementById("reiniciar").style.display = 'none';
  document.getElementById("formNombre").style.display = 'flex';
  document.getElementById("bienvenida").style.display = 'flex';
  document.getElementById("bienvenida").innerHTML = "¿Quieres empezar a jugar?";
}

function empezar(){
  document.getElementById("escoger").style.display = 'flex';
  document.getElementById("formNombre").style.display = 'none';
  alert ("Hola " + nombre);
}


function jugar(){
  escogido = document.getElementById("selectorT").value;
  document.getElementById("escoger").style.display = 'none';
  if (escogido == 0) {
    document.getElementById("containerTrivia").style.display = 'flex';
  } else if (escogido == 1){
    document.getElementById("containerTrivia1").style.display = 'flex';
  }
  
  //let nombre = prompt ("¿Cómo te llamas?");
  document.getElementById("bienvenida").style.display = 'block';
  const textNombre = document.getElementById("nombreL");
  //nombre = nombre.toUpperCase().toLowerCase();
  //nombre = nombre.charAt(0).toUpperCase().concat(nombre.substring(1, nombre.length));
  textNombre.value = nombre;
  const msg = document.getElementById("bienvenida");
  msg.innerHTML = `¡Bienvenida, ${nombre}! Ahora si, ¡vamos a jugar!`;
  //document.getElementById("containerTrivia").style.display = 'flex';
  document.getElementById("contestar").style.display = 'flex';
  document.getElementById("formNombre").style.display = 'none';

  var inputs = document.getElementsByTagName("input");
  for (var i of inputs){
    if (i.type == "radio"){
      i.checked = false;
      i.removeAttribute('disabled');
    }
  }
  
  var labels = document.getElementsByTagName("label");
  for (var i in labels){
    if(i > 0 && i < labels.length){
      labels[i].style.backgroundColor = "var(--color-bg)";
      labels[i].style.color = "black";
    }
  }

  /*
  var ps = document.getElementsByTagName("p");
  for (var p of ps){
    if (p.id.startsWith("pregunta-")){
      var div = p.textContent.split("\t");
      p.textContent = div[0];
    }
  }
  */
}

function contestar() {
  /* Lógica del proceso */
  var selected = false;
  
  var puntaje = 0;
  var sumar = 100/(correctas[escogido].length);

  let i = 0;
  let max = correctas[escogido].length;
  if (escogido == 1){
    i = max;
    max = i + max;
  }

  for (i; i<max; i++){
    var pre = `pregunta-${parseInt(i)+1}`;
    var pregunta = document.getElementById(pre);
    var radios = document.getElementsByName(pre);
    
    //console.log(pregunta.textContent);
    //var div = pregunta.textContent.split("\t");
    //pregunta.textContent = div[0];
    //console.log(pregunta.textContent);

    for (var r of radios){
      // Proceso de evaluación
      if (r.type === 'radio' && r.checked){
        var buscarCorrecta = `op-${parseInt(i)+1}.${correctas[escogido][parseInt(i)] + 1}`;
        if (escogido == 1){
          buscarCorrecta = `op-${parseInt(i)+1}.${correctas[escogido][parseInt(i)-correctas[escogido].length]+1}`;
        }
        var labelCorrecta = document.getElementById(buscarCorrecta);
        labelCorrecta.style.backgroundColor = "green";
        labelCorrecta.style.color = "white";

        var buscarSeleccionada = `op-${parseInt(i)+1}.${parseInt(r.value) + 1}`;
        var labelSeleccionada = document.getElementById(buscarSeleccionada);
        
        var comparar = correctas[escogido][i];
        if (escogido == 1){
          comparar = correctas[escogido][parseInt(i)-correctas[escogido].length];
        }
        if (parseInt(r.value) != comparar){
          labelSeleccionada.style.backgroundColor = "red";
          labelSeleccionada.style.color = "yellow";
          //pregunta.append("\t🥺 ❌");
        } else if (parseInt(r.value) == comparar){
          //pregunta.append("\t🥰 ✅");
          puntaje += sumar;
        }
        selected = true;
      }
      if (r.type === 'radio'){
        r.setAttribute('disabled', 'disabled');
      }
    if (!selected) {
      //pregunta.textContent = pregunta.textContent.concat("\t💬 ❌");
      //labelCorrecta.style.backgroundColor = "green";
      //labelCorrecta.style.color = "white";
    }
    selected = false;
    }
  }
  alert(`\t\tGracias por jugar la Trivia:\n\t\t\t\tTu puntaje es ${puntaje}/100`)
  document.getElementById("contestar").style.display = 'none';
  document.getElementById("reiniciar").style.display = 'flex';
}
