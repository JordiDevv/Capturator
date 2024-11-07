window.addEventListener("load", iniciarJuego)

//secciones
const sectionBienvenido = document.getElementById("sectionBienvenido")
const sectionInicio = document.getElementById("sectionInicio")
const sectionPorCierto = document.getElementById("sectionPorCierto")
const sectionConociendoAOka = document.getElementById("sectionConociendoAOka")
const sectionEncantado = document.getElementById("sectionEncantado")
const sectionElección = document.getElementById("sectionElección")
const sectionCaptura = document.getElementById("sectionCaptura")
const sectionCapturaArceus = document.getElementById("sectionCapturaArceus")
const sectionRetirarLicencia = document.getElementById("sectionRetirarLicencia")
const sectionTeamRocket = document.getElementById("sectionTeamRocket")
const sectionReinicio = document.getElementById("sectionReinicio")

//botones
const botonSiguiente = document.getElementById("botonSiguiente")
const botonEntendido = document.getElementById("botonEntendido")
const botonNombre = document.getElementById("botonNombre")
const botonIgualmente = document.getElementById("botonIgualmente")
const botonLoTengo = document.getElementById("botonLoTengo")
const imgBotonLoTengo = document.getElementById("imgBotonLoTengo")
const botonAceptar = document.getElementById("botonAceptar")
const botonFlashback = document.getElementById("botonFlashback")
const botonReinicio = document.getElementById("botonReinicio")

//nombre
const inputNombre = document.getElementById("inputNombre")
const spanNombreJugador = document.getElementById("spanNombreJugador")

//inputs pokemon
const inputMew = document.getElementById("inputMew")
const inputMewtwo = document.getElementById("inputMewtwo")
const inputMoltres = document.getElementById("inputMoltres")
const inputDragonite = document.getElementById("inputDragonite")
const inputCharizard = document.getElementById("inputCharizard")
const inputGolem = document.getElementById("inputGolem")
const inputTauros = document.getElementById("inputTauros")
const inputStarmie = document.getElementById("inputStarmie")
const inputÓnix = document.getElementById("inputÓnix")
const inputCaterpie = document.getElementById("inputCaterpie")

//jugabilidad
let acierto = 0
let posibilidad = Math.floor(Math.random()*(10-0+1)+0)
let resistencia = 0
let puntuación = 0
let fallos = 0
let lanzamientos = 0
let pokemon = ""

//pokemon
let pokemones = []

class Pokemon {
    constructor(nombrePokemon, imagenPokemon, resistencia) {
        this.nombrePokemon = nombrePokemon
        this.imagenPokemon = imagenPokemon
        this.resistencia = resistencia
    }
}

let mew = new Pokemon("Mew", "./assests/Mew.jpg", 10)
let mewtwo = new Pokemon("Mewtwo", "./assests/Mewtwo.jpg", 9)
let moltres = new Pokemon("Moltres", "./assests/Moltres.jpg", 8)
let dragonite = new Pokemon("Dragonite", "./assests/Dragonite.jpg", 7)
let charizard = new Pokemon("Charizard", "./assests/Charizard.jpg", 6)
let golem = new Pokemon("Golem", "./assests/Golem.jpg", 5)
let tauros = new Pokemon("Tauros", "./assests/Tauros.jpg", 4)
let starmie = new Pokemon("Starmie", "./assests/Starmie.jpg", 3)
let onix = new Pokemon("Ónix", "./assests/Ónix.jpg", 2)
let caterpie = new Pokemon("Caterpie", "./assests/Caterpie.jpg", 1)

pokemones.push(mew, mewtwo, moltres, dragonite, charizard, golem, tauros, starmie, onix, caterpie)


//funciones
function iniciarJuego() {

    sectionPorCierto.style.display = "none"
    sectionConociendoAOka.style.display = "none"
    sectionEncantado.style.display = "none"
    sectionElección.style.display = "none"
    sectionCaptura.style.display = "none"
    sectionCapturaArceus.style.display = "none"
    sectionRetirarLicencia.style.display = "none"
    sectionTeamRocket.style.display = "none"
    sectionReinicio.style.display = "none"    

    botonSiguiente.addEventListener("click", crearSectionPorCierto)
    botonReinicio.addEventListener("click", reinicio)

}

function crearSectionPorCierto() {

    sectionPorCierto.style.display = "flex"
    sectionInicio.style.display = "none"

    botonEntendido.addEventListener("click", crearSectionConociendoAOka)

}

function crearSectionConociendoAOka() {

    sectionConociendoAOka.style.display = "flex"
    sectionBienvenido.style.display = "none"
    sectionPorCierto.style.display = "none"

    botonNombre.addEventListener("click", crearSectionEncantado)

}

function nombreJugador() {

    let nombreJugador = inputNombre.value
    spanNombreJugador.innerHTML = nombreJugador
    
}

function crearSectionEncantado() {

    nombreJugador()

    sectionEncantado.style.display = "flex"
    sectionConociendoAOka.style.display = "none"

    botonIgualmente.addEventListener("click", seleccionPokemon)

}

function seleccionPokemon() {

    sectionEncantado.style.display = "none"
    sectionElección.style.display = "flex"

    botonLoTengo.addEventListener("click", seleccionPokemon)
    
    if (inputMew.checked && puntuación < 10 && fallos < 3 && lanzamientos <10) {
        pokemon = "Mew"
        resistencia = 10
        crearSectionCaptura()
    } else if (inputMewtwo.checked && puntuación < 10 && fallos < 3 && lanzamientos <10) {
        pokemon = "Mewtwo"
        resistencia = 9
        crearSectionCaptura()
    } else if (inputMoltres.checked && puntuación < 10 && fallos < 3 && lanzamientos <10) {
        pokemon = "Moltres"
        resistencia = 8
        crearSectionCaptura()
    } else if (inputDragonite.checked && puntuación < 10 && fallos < 3 && lanzamientos <10) {
        pokemon = "Dragonite"
        resistencia = 7
        crearSectionCaptura()
    } else if (inputCharizard.checked && puntuación < 10 && fallos < 3 && lanzamientos <10) {
        pokemon = "Charizard"
        resistencia = 6
        crearSectionCaptura()
    } else if (inputGolem.checked && puntuación < 10 && fallos < 3 && lanzamientos <10) {
        pokemon = "Golem"
        resistencia = 5
        crearSectionCaptura()
    } else if (inputTauros.checked && puntuación < 10 && fallos < 3 && lanzamientos <10) {
        pokemon = "Tauros"
        resistencia = 4
        crearSectionCaptura()
    } else if (inputStarmie.checked && puntuación < 10 && fallos < 3 && lanzamientos <10) {
        pokemon = "Starmie"
        resistencia = 3
        crearSectionCaptura()
    } else if (inputÓnix.checked && puntuación < 10 && fallos < 3 && lanzamientos <10) {
        pokemon = "Ónix"
        resistencia = 2
        crearSectionCaptura()
    } else if (inputCaterpie.checked && puntuación < 10 && fallos < 3 && lanzamientos <10) {
        pokemon = "Caterpie"
        resistencia = 1
        crearSectionCaptura()
    }
    
    let acierto = (posibilidad - resistencia)
        
    if (acierto >= 0) {
        puntuación = (puntuación + resistencia)
        lanzamientos = (lanzamientos + 1)
        let spanTextoCaptura = document.getElementById("spanTextoCaptura")
        spanTextoCaptura.innerHTML = "Enhorabuena!! Lograste atrapar a " + pokemon
    } else if (acierto < 0) {
        let spanTextoCaptura = document.getElementById("spanTextoCaptura")
        spanTextoCaptura.innerHTML = "Oh, no! " + pokemon + " escapó"
        fallos = (fallos + 1)
        lanzamientos = (lanzamientos + 1)
    }

}

function crearSectionCaptura() {

    let inputNombre = document.getElementById("inputNombre")
    let nombreJugador = inputNombre.value
    let spanNombreJugadorCaptura = document.getElementById("spanNombreJugadorCaptura")
    spanNombreJugadorCaptura.innerHTML = nombreJugador

    sectionCaptura.style.display = "flex"

    botonAceptar.addEventListener("click", borradorMensajes)

    imgBotonLoTengo.style.display = "none"

}

function borradorMensajes() {

    sectionCaptura.style.display = "none"
    imgBotonLoTengo.style.display = "flex"

    if (puntuación >= 10) {
        capturaArceus()
    } else if (fallos >= 3) {
        retirarLicencia()
    } else if(lanzamientos >= 10) {
        teamRocket()
    }

}

function capturaArceus() {

    sectionElección.style.display = "none"
    sectionCapturaArceus.style.display = "flex"

    botonFlashback.addEventListener("click", flashback)
}

function retirarLicencia() {

    sectionElección.style.display = "none"
    sectionRetirarLicencia.style.display = "flex"
    sectionReinicio.style.display = "flex"

}

function teamRocket() {

    sectionElección.style.display = "none"
    sectionTeamRocket.style.display = "flex"
    sectionReinicio.style.display = "flex"

}

function flashback() {

    let nombreJugador = inputNombre.value

    let pokemon = prompt("A quién quieres capturar?\nPuedes elegir entre:\nMew\nMewtwo\nMoltres\nDragonite\nCharizard\nGolem\nTauros\nStarmie\nÓnix\nCaterpie\n(Recuerda que cuanto más raro sea el pokemon, más difícil será de capturar)")

    if (pokemon == "Arceus") {
        resistencia = 10
    } else {
        alert("Profesor Oka: -\"Lástima\"")
        sectionCapturaArceus.style.display = "none"
        sectionReinicio.style.display = "flex"
    }

    let acierto = (posibilidad - resistencia)
    
    if (acierto >= 0 && pokemon == "Arceus") {
        alert("*" + nombreJugador + " ha lanzado su pokeball*")
        alert("...\n\n\n\n\n\n\n\n\n\n(Lo has capturado)")
        sectionCapturaArceus.style.display = "none"
        sectionReinicio.style.display = "flex"

    } else if (acierto < 0 && pokemon == "Arceus") {
        alert("*" + nombreJugador + " ha lanzado su pokeball*")
        alert("Ha sido un gran intento, pero Arceus ha vuelto a su dimensión")
        sectionCapturaArceus.style.display = "none"
        sectionReinicio.style.display = "flex"
    }

}

function reinicio() {
    location.reload()
}