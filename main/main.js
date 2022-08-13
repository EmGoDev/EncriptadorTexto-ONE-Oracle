
let input = document.querySelector("textarea")
input.focus()

resultText = document.querySelector(".resultContent")
//console.log(resultText.innerHTML)

let botonEncriptar = document.querySelector(".botonEncriptar")
let botonDesencriptar = document.querySelector(".botonDesencriptar")

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

botonEncriptar.onclick = () => {
    resultado = encriptar()
    resultText.innerHTML = resultado
}

botonDesencriptar.onclick = () => {
    resultado = desencriptar()
    resultText.innerHTML = resultado
}


