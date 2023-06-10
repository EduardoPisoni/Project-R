let objVetores

function load(){
    objVetores = new Vetores
}

function calcularIntervalo(){
    objVetores.calcularIntervalo()
}


//exercício 2
function exibirArray(){
    let divArray = document.getElementById("showArray")
    divArray.innerHTML = objVetores.getVetor()
}

function parOuImpar(){
    let divPares = document.getElementById("numerosPares")
    divPares.innerHTML = objVetores.vetorPares()
    let divImpares = document.getElementById("numerosImpares")
    divImpares.innerHTML = objVetores.vetorImpares()
    let respostas = document.getElementById("respostas")
    respostas.style.display = "block"
}

