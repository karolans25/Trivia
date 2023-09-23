/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log('Hello 🌎')

const preguntas = ['1. ¿Cuáles son dulces típicos de México?',
  '2. ¿Cuáles son dulces típicos de Colombia?',
  '3. ¿Cuáles son comidas típicas de Colombia?',
  '4. ¿Cuáles son comidas típicas de México?']

const opciones = [['Suspiro, turrón, alfajor', 'Papajotes, torrijas, churros', 'Borrachito, alegría, tarugos'],
  ['Cucas, manjar blanco, alfandoques', 'Éclair, charlotte, coulant de chocolate', 'Muéganos, ate, palanquetas, camotes'],
  ['Bratwurst, pretzel, schnitzel', 'Tacos, mole, chilaquiles', 'Bandeja paisa, ajiaco, mote de queso'],
  ['Asado, locro, empanadas', 'Pozole, cochinita pibil, tlayuda', 'Mandioca, chipa, araticú']]

const correctas = [2, 0, 2, 1]

for (const i in preguntas) {
  const pre = 'pregunta-' + preguntas[i][0]
  console.log(pre)
  const p = document.getElementById(pre)
  p.innerHTML = preguntas[i]
  for (const j in opciones[i]) {
    const opc = `op-${parseInt(i) + 1}.${parseInt(j) + 1}`
    console.log(opc)
    const o = document.getElementById(opc)
    o.innerHTML = opciones[i][j]
  }
}

function getRadioValue () {
  const respuestas = []
  let selected = false
  const numPreguntas = preguntas.length
  let output = ''

  for (const i in preguntas) {
    const pre = 'pregunta-' + preguntas[i][0]
    const radios = document.getElementsByName(pre)
    const tags = document.getElementsByTagName('radio')
    for (const j in radios) {
      if (radios[j].type === 'radio' && radios[j].checked) {
        selected = true
      }
      radios[j].setAttribute('disabled', 'disabled')
      radios[j].removeAttribute('disabled')
    }
    if (!selected) {
      respuestas.push([parseInt(i) + 1, 'No ha respondido'])
      // alert('No ha respondido la pregunta ' + (parseInt(i)+1).toString());
    }
  }

  for (const respuesta of respuestas) {
    output += 'Respuesta a la pregunta ' + respuesta[0] + ':\n\t' + respuesta[1] + '\n\n'
  }
  alert(output)
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
