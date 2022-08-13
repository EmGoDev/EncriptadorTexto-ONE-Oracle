
//los queridisimos querySelectors
//input
let input = document.querySelector("textarea")
input.focus()
//output
resultText = document.querySelector(".resultContent")
//BOTONES
let botonEncriptar = document.querySelector(".botonEncriptar")
let botonDesencriptar = document.querySelector(".botonDesencriptar")
let botonCopiar = document.querySelector(".botonCopiar")

function encriptar() {
    resultado = ""
    for (let i = 0; i < input.value.length; i++) {
        if (input.value[i] == "a") { resultado += (input.value[i].replace("a", "ai")) }
        else if (input.value[i] == "e") { resultado += (input.value[i].replace("e", "enter")) }
        else if (input.value[i] == "i") { resultado += (input.value[i].replace("i", "imes")) }
        else if (input.value[i] == "o") { resultado += (input.value[i].replace("o", "ober")) }
        else if (input.value[i] == "u") { resultado += (input.value[i].replace("u", "ufat")) }
        else { resultado += (input.value[i]) }
    }
    //termino de ckeckear, se reinicia el input
    input.value = ""
    //resultado
    return resultado
}

function desencriptar() {
    resultado = ""
    for (let i = 0; i < input.value.length; i++) {
        input.value = input.value.replace("ai", "a")
        input.value = input.value.replace("enter", "e")
        input.value = input.value.replace("imes", "i")
        input.value = input.value.replace("ober", "o")
        input.value = input.value.replace("ufat", "u")
        resultado = input.value
    }
    //termino de ckeckear, se reinicia el input
    input.value = ""
    //resultado
    return resultado
}

function noMensajeEncontrado() {
    let noMensaje = document.querySelector(".noMensaje")
    let noMensajeConsejo = document.querySelector(".noMensajeConsejo")
    let diamondGuy = document.querySelector(".diamondGuy")
    //si el campo de resultados esta ocupado,
    //ocultar mensaje "Ningun mensaje fue encontrado"
    //(convertí el innerHTML en string para que el if lo tomara)
    if ((resultText.innerHTML.replace(/<[^>]*>/g, '')) !== "") {
        noMensaje.classList.add("hide")
        noMensajeConsejo.classList.add("hide")
        diamondGuy.classList.add("hide")
    } else {
        noMensaje.classList.remove("hide")
        noMensajeConsejo.classList.remove("hide")
        diamondGuy.classList.remove("hide")
    }
}

function Copiar() {
    var textoCopiado = document.querySelector(".portapapeles");
    textoCopiado.setAttribute('value', resultText.innerHTML);

    textoCopiado.select();
    document.execCommand('copy');
}

//ACCIONES DE BOTONES
botonEncriptar.onclick = () => {
    resultado = encriptar()
    resultText.innerHTML = resultado
    noMensajeEncontrado()
}

botonDesencriptar.onclick = () => {
    resultado = desencriptar()
    resultText.innerHTML = resultado
    noMensajeEncontrado()
}

botonCopiar.onclick = () => {
    Copiar()
}

//al cargar página:
noMensajeEncontrado()
