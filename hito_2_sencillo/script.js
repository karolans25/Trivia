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

var correctas = [2, 0, 2, 1];

var nombre = "";

var numPreguntas = 4;

function mostrar(n){
  nombre = n;
  //alert("Hola");
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
  document.getElementById("bienvenida").style.display = 'block';
  const textNombre = document.getElementById("nombreL");
  //nombre = nombre.toUpperCase().toLowerCase();
  //nombre = nombre.charAt(0).toUpperCase().concat(nombre.substring(1, nombre.length));
  textNombre.value = nombre;
  alert ("Hola " + textNombre.value);
  const msg = document.getElementById("bienvenida");
  msg.innerHTML = `¡Bienvenida, ${nombre}! Ahora si, ¡vamos a jugar!`;
  document.getElementById("containerTrivia").style.display = 'flex';
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

  var ps = document.getElementsByTagName("p");
  for (var p of ps){
    if (p.id.startsWith("pregunta-")){
      var div = p.textContent.split("\t");
      p.textContent = div[0];
    }
  }
}

function contestar() {
  /* Lógica del proceso */
  var selected = false;
  

  for (let i=0; i<numPreguntas; i++){
    var pre = `pregunta-${i+1}`;
    var pregunta = document.getElementById(pre);
    var radios = document.getElementsByName(pre);
    for (var j in radios){
      // Proceso de respuesta del usuario
      if (radios[j].type === 'radio' && radios[j].checked){
        var labelCorrecta = document.getElementById(`op-${parseInt(i)+1}.${correctas[i]+1}`);
        labelCorrecta.style.backgroundColor = "green";
        labelCorrecta.style.color = "white";

        var labelRadio = document.getElementById(`op-${i+1}.${parseInt(j)+1}`);
        if (j != correctas[i]){
          labelRadio.style.backgroundColor = "red";
          labelRadio.style.color = "yellow";
          pregunta.append("\t🥺 ❌");
        } else if (j == correctas[i]){
          pregunta.append("\t🥰 ✅");
        }
        selected = true;
      }
      if (radios[j].type === 'radio'){
        radios[j].setAttribute('disabled', 'disabled');
      }
    }
    if (!selected) {
      pregunta.append("\t💬 ❌");
      //labelCorrecta.style.backgroundColor = "green";
      //labelCorrecta.style.color = "white";
    }
    selected = false;
  }      
    document.getElementById("contestar").style.display = 'none';
    document.getElementById("reiniciar").style.display = 'flex';
}