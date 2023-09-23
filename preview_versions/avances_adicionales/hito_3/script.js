/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
// console.log("Hello 🌎");

const tipos = ['Comidas', 'Bebidas']

let escogido = 0

const preguntas = [['1. ¿Cuáles son dulces típicos de México?',
  '2. ¿Cuáles son dulces típicos de Colombia?',
  '3. ¿Cuáles son comidas típicas de Colombia?',
  '4. ¿Cuáles son comidas típicas de México?'
],
['1. ¿Cuáles son bebidas frías típicas de México?',
  '2. ¿Cuáles son bebidas frías típicas de Colombia?',
  '3. ¿Cuáles son bebidas calientes típicas de Colombia?',
  '4. ¿Cuáles son bebidas calientes típicas de México?'
]
]

const opciones = [[['Suspiro, turrón, alfajor',
  'Papajotes, torrijas, churros',
  'Borrachito, alegría, tarugos'],
['Cucas, manjar blanco, alfandoques',
  'Éclair, charlotte, coulant de chocolate',
  'Muéganos, ate, palanquetas, camotes'],
['Bratwurst, pretzel, schnitzel',
  'Tacos, mole, chilaquiles',
  'Bandeja paisa, ajiaco, mote de queso'],
['Asado, locro, empanadas',
  'Pozole, cochinita pibil, tlayuda',
  'Mandioca, chipa, araticú']
],
[['Guaraná, jugo de caña, pulque',
  'Pozol, pulque, tepache',
  'Los e y los f'],
['Limoncello, sambuca, fernet',
  'Lulada, campús, jugo de borojó',
  'Trascalate, cebadina, tejuino'],
['Carato, papelón con limón, tizana',
  'Chocolate, atole negro, ponche',
  'Canelazo, aguadepanela, chocolate'],
['Los a y los b',
  'Los c y los d',
  'Los e y los f']
]
]

const correctas = [[2, 0, 2, 1], [1, 1, 2, 0]]

let nombre = ''

function mostrar (n) {
  nombre = n
}

function reiniciar () {
  // Esconde los div y container
  document.getElementById('containerTrivia').style.display = 'none'
  document.getElementById('contestar').style.display = 'none'
  document.getElementById('reiniciar').style.display = 'none'
  document.getElementById('escoger').style.display = 'none'
  // Muestra los div y container de esta vista
  document.getElementById('login').style.display = 'flex'
  document.getElementById('bienvenida').style.display = 'flex'
  // document.getElementById("bienvenida").style.display = 'block';
  // Modifica el valor del mensaje de bienvenida
  document.getElementById('bienvenida').innerHTML = '¿Quieres empezar a jugar?'
  if (document.getElementById('selectorT')) {
    document.getElementById('selectorT').remove()
  }
  if (document.getElementById('buttonT')) {
    document.getElementById('buttonT').remove()
  }
  // Pone por defecto el valor del input text
  document.getElementById('nombreL').value = ''
}

function login () {
  reiniciar()
  // Modifica el valor input text del nombre en tiempo real
  // nombre = nombre.toUpperCase().toLowerCase();
  // nombre = nombre.charAt(0).toUpperCase().concat(nombre.substring(1, nombre.length));
  document.getElementById('nombreL').value = nombre
  alert('Hola ' + nombre)
  seleccionar()
}

function seleccionar () {
  // Muestra y esconde los div de la vista
  document.getElementById('login').style.display = 'none'
  document.getElementById('escoger').style.display = 'flex'
  // Cambia el mensaje de la vista
  document.getElementById('bienvenida').innerHTML = 'Escoge el tema de las preguntas'

  // Crea y agrega un selector con las opciones de los tipos de preguntas
  const divSelector = document.getElementById('divSelector')
  const select = document.createElement('select')
  select.setAttribute('id', 'selectorT')
  for (const tip in tipos) {
    const op = document.createElement('option')
    op.setAttribute('value', tip)
    const opText = document.createTextNode(tipos[tip])
    op.appendChild(opText)
    select.append(op)
  }
  divSelector.appendChild(select)

  // Crea el botón de seleccionar el tipo de preguntas
  const divEscoger = document.getElementById('divEscoger')
  const button = document.createElement('input')
  button.type = 'button'
  button.id = 'buttonT'
  button.value = 'Escoger'
  button.setAttribute('onclick', 'jugar(); return false')
  divEscoger.appendChild(button)
}

function jugar () {
  escogido = document.getElementById('selectorT').value
  const msg = document.getElementById('bienvenida')
  msg.innerHTML = `Bienvenida, ${nombre}! Ahora si vamos a jugar!`

  // Organiza la vista del juego (visibilidad de elementos)
  document.getElementById('escoger').style.display = 'none'
  document.getElementById('containerTrivia').style.display = 'flex'
  document.getElementById('contestar').style.display = 'flex'
  onLoad()
}

function onLoad () {
  const lasPreguntas = preguntas[escogido]
  const lasOpciones = opciones[escogido]
  for (const i in lasPreguntas) {
    const pre = `pregunta-${parseInt(i) + 1}`
    const pPreguntas = document.getElementById(pre)
    const radios = document.getElementsByName(pre)
    const elementos = document.getElementsByTagName('radio')
    console.log(elementos)
    // Modificar el valor de las etiquetas que son para pregunta
    pPreguntas.innerHTML = lasPreguntas[i]
    for (const j in lasOpciones[i]) {
      const opc = `op-${parseInt(i) + 1}.${parseInt(j) + 1}`
      const laOpcion = document.getElementById(opc)
      laOpcion.style.backgroundColor = 'var(--color-bg)'
      laOpcion.style.color = 'black'
      radios[j].checked = false
      laOpcion.innerHTML = lasOpciones[i][j]
      radios[j].value = lasOpciones[i][j]
    }
  }
}

function evaluarRespuestas () {
  // Esconde el botón de contestar y muestra el de reiniciar
  document.getElementById('reiniciar').style.display = 'flex'
  document.getElementById('contestar').style.display = 'none'

  /** Inicia el proceso cuando se va a calificar */
  const respuestas = []
  let selected = false
  const output = ''
  let puntaje = 100

  const lasPreguntas = preguntas[escogido]
  const lasOpciones = opciones[escogido]
  for (const i in lasPreguntas) {
    const pre = `pregunta-${parseInt(i) + 1}`
    const pEmoji = document.getElementById(pre)
    const radios = document.getElementsByName(pre)
    for (const radio of radios) {
      if (radio.type === 'radio' && radio.checked) { // && lasOpciones.indexOf(radio.value) != -1){
        const labelRadio = document.getElementById(`op-${parseInt(i) + 1}.${lasOpciones[i].indexOf(radio.value) + 1}`)
        const labelCorrecta = document.getElementById(`op-${parseInt(i) + 1}.${correctas[escogido][i] + 1}`)
        labelCorrecta.style.backgroundColor = 'green'
        labelCorrecta.style.color = 'white'

        if (lasOpciones[i].indexOf(radio.value) != correctas[escogido][i]) {
          labelRadio.style.backgroundColor = 'red'
          labelRadio.style.color = 'yellow'
          pEmoji.append('\t🥺 ❌')
          puntaje -= (100 / lasPreguntas.length)
        } else if (lasOpciones[i].indexOf(radio.value) == correctas[escogido][i]) {
          pEmoji.append('\t🥰 ✅')
        }
        selected = true
      }
    }
    if (!selected) {
      pEmoji.append('\t💬 ❌')
      puntaje -= (100 / lasPreguntas.length)
    }
    selected = false
  }
  alert(`\t\t Gracias por participar!\n\n\t\t\t\tTu puntaje fue de ${puntaje}/100`)
}
