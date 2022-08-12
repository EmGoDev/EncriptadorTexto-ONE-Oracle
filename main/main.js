
let input = document.querySelector("textarea")
input.focus()

resultText = document.querySelector(".resultCard p")
//console.log(resultText.innerHTML)

let botonEncriptar = document.querySelector("button")


function encriptar() {
    resultado = ""
    for (let i = 0; i < input.value.length; i++) {
        console.log("iterando: " + input.value[i])
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
    console.log("resultado: \n" + resultado)
    return resultado
}

botonEncriptar.onclick = () => {
    resultado = encriptar()
    resultText.innerHTML = resultado
}


