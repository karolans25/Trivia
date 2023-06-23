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
   /*Duda Ivonne*/
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
  
  let i = 0;
  let max = correctas[escogido].length;
  if (escogido == 1){
    i = max;
    max = i + max;
  }
  
  //for (let i=0; i<4; i++){
  //console.log(`escogido: ${escogido}`);
  //console.log(`escogido == 1: ${escogido==1}`);
  //console.log(`i: ${i}`);
  //console.log(`max: ${max}`);
  for (i; i<max; i++){
    var pre = `pregunta-${parseInt(i)+1}`;
    var pregunta = document.getElementById(pre);
    var radios = document.getElementsByName(pre);
    //console.log(pregunta);
    //console.log(radios);
    for (var r of radios){
      // Proceso de respuesta del usuario
      if (r.type === 'radio' && r.checked){
        var buscarCorrecta = `op-${parseInt(i)+1}.${correctas[escogido][parseInt(i)] + 1}`;
        console.log(escogido);
        if (escogido == 1){
          console.log("Entró: ")
          console.log(`i: ${i}`);
          buscarCorrecta = `op-${parseInt(i)+1}.${correctas[escogido][parseInt(i)-correctas[escogido].length+1]}`;
          console.log(correctas[escogido]);
          console.log(correctas[escogido][parseInt(i)-correctas[escogido].length]);
          console.log(correctas[escogido][parseInt(i)-correctas[escogido].length+1]);
          console.log(`buscarCorrecta: ${buscarCorrecta}`);
        }
        //var labelCorrecta = document.getElementById(buscarCorrecta);
        //console.log(labelCorrecta);
        //labelCorrecta.style.backgroundColor = "green";
        //labelCorrecta.style.color = "white";
      }
    }
/**/
/*        var buscarS = `op-${i}.${parseInt(j)-1}`;
        if(escogido == 1){
          buscarS = `op-${i}.${parseInt(j)-5}`;
        }
        var labelRadio = document.getElementById(buscarS);
        if (j != correctas[i]){
          labelRadio.style.backgroundColor = "red";
          labelRadio.style.color = "yellow";
          pregunta.append("\t🥺 ❌");
        } else if (j == correctas[i]){
          pregunta.append("\t🥰 ✅");
        }
        selected = true;*/
      }
      //if (radios[j].type === 'radio'){
      //  radios[j].setAttribute('disabled', 'disabled');
      //}
    //}
    //if (!selected) {
      //pregunta.append("\t💬 ❌");
      ////labelCorrecta.style.backgroundColor = "green";
      ////labelCorrecta.style.color = "white";
    //}
    //selected = false;
        
    document.getElementById("contestar").style.display = 'none';
    document.getElementById("reiniciar").style.display = 'flex';

}
