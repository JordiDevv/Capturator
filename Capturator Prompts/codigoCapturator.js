alert("INSTRUCCIONES:\nDebes conseguir 10 puntos para ganar. Cuanto más raro sea un pokemon mayor puntaje, pero mayor dificultad, y si fallas 3 veces te quitarán la licencia de entrenador por paquete... Son muy estrictos.")
alert("Por cierto! Deberás conseguirlo en 10 lanzamientos como mucho, o al Team Rocket le dará tiempo de llevarse a todos los pokemon, asi que no vayas todo el rato a por Caterpie jeje. HAZTE CON TODOS!")
let jugador = prompt("Profesor Oka: -\"Pero dónde están mis modales?! Ni siquiera te he preguntado cómo te llamas!\"\n\nTú: -\"Me llamo...\"")
alert("Profesor Oka: -\"Encantado " + jugador + "!\"")

let puntuación = 0
let fallos = 0
let lanzamientos = 0
let nul = 0
let resistencia = 0
let pokeball = "*" + jugador + " ha lanzado su pokeball*"

while (puntuación < 10 && fallos < 3 && lanzamientos <10) {
    let posibilidad = Math.floor(Math.random()*(10-0+1)+0)
    let pokemon = prompt("A quién quieres capturar?\nPuedes elegir entre:\nMew\nMewtwo\nMoltres\nDragonite\nCharizard\nGolem\nTauros\nStarmie\nÓnix\nCaterpie\n(Recuerda que cuanto más raro sea el pokemon, más difícil será de  capturar)")
    if (pokemon == "Mew") {
        resistencia = 10
        alert(pokeball)
        nul = 0
    } else if (pokemon == "Mewtwo") {
        resistencia = 9
        alert(pokeball)
        nul = 0
    } else if (pokemon == "Moltres") {
        resistencia = 8
        alert(pokeball)
        nul = 0
    } else if (pokemon == "Dragonite") {
        resistencia = 7
        alert(pokeball)
        nul = 0
    } else if (pokemon == "Charizard") {
        resistencia = 6
        alert(pokeball)
        nul = 0
    } else if (pokemon == "Golem") {
        resistencia = 5
        alert(pokeball)
        nul = 0
    } else if (pokemon == "Tauros") {
        resistencia = 4
        alert(pokeball)
        nul = 0
    } else if (pokemon == "Starmie") {
        resistencia = 3
        alert(pokeball)
        nul = 0
    } else if (pokemon == "Ónix") {
        resistencia = 2
        alert(pokeball)
        nul = 0
    } else if (pokemon == "Caterpie") {
        resistencia = 1
        alert(pokeball)
        nul = 0
    } else {
        alert("Nuestra pokedex no reconoce a ese pokemon (Recuerda escribir bien :))")
        nul = (nul + 1)
    }
    
    let acierto = (posibilidad - resistencia)
    
    if (acierto >= 0 && nul == 0) {
        alert("Enhorabuena!! Lograste atrapar a " + pokemon)
        puntuación = (puntuación + resistencia)
        lanzamientos = (lanzamientos + 1)
    } else if (acierto < 0 && nul == 0) {
        alert("Oh, no! " + pokemon + " escapó")
        fallos = (fallos + 1)
        lanzamientos = (lanzamientos + 1)
    }
}

while (puntuación >= 10 && nul == 0) {
    alert("Profesor Oka: -\"Increíble... Eres un prodigio de la captura.\nTal vez tú serías capaz de capturar al legendario Arceus\"")
    let posibilidad = Math.floor(Math.random()*(10-0+1)+0)
    let pokemon = prompt("A quién quieres capturar?\nPuedes elegir entre:\nMew\nMewtwo\nMoltres\nDragonite\nCharizard\nGolem\nTauros\nStarmie\nÓnix\nCaterpie\n(Recuerda que cuanto más raro sea el pokemon, más difícil será de capturar)")

    if (pokemon == "Arceus") {
        resistencia = 10
    } else {
        alert("Profesor Oka: -\"Lástima\"")
    }

    let acierto = (posibilidad - resistencia)
    
    if (acierto >= 0 && pokemon == "Arceus") {
        alert("*" + jugador + " ha lanzado su pokeball*")
        alert("...\n\n\n\n\n\n\n\n\n\n(Lo has capturado)")
        nul = (nul + 1)
    } else if (acierto < 0 && pokemon == "Arceus") {
        alert("*" + jugador + " ha lanzado su pokeball*")
        alert("Ha sido un gran intento, pero Arceus ha vuelto a su dimensión")
        nul = (nul + 1)
    } else {
        nul = (nul + 1)
    }
}

if (lanzamientos == 10) {
    alert("*música estridente sonando de fondo*\n\nVoz de fondo -\"Para proteger al mundo de la devastación...\"\n\nEn fin, etc etc.\nHa llegado el Team Rocket y se ha llevado a todos los pokemon... Te lo avisé")
}

if (fallos == 3) {
    alert("Ceniza de Ketchup -\"Como líder todopoderoso de la asociación de entrenadores del mundo pokemon, estoy en mi deber de quitarte la licencia. Eres la vergüenza del gremio.\"")
    alert("Profesor Oka -\"No le hagas mucho caso. Está resentido porque lleva 28 años intentando ganar una liga y no lo consigue, pero quizás deberías volver a intentarlo. Estoy seguro de que puedes hacerlo mejor.\"")
}

