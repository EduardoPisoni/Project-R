class Vetores {
    constructor() {
        //atributos
        this.vetor = [78, 94, 36, 98, 54, 43, 32, 18, 5, 28, 64, 21, 98, 53, 41]
    }

    getVetor(){
        return this.vetor
    }

    calcularIntervalo() {
        let resultado = 0
        let posicaoInicial = +document.getElementById("inputPosicaoInicial").value
        let posicaoFinal = +document.getElementById("inputPosicaoFinal").value

        this.vetor.forEach((valor, i) => {
            if (i >= posicaoInicial && i <= posicaoFinal) {
                resultado += valor
            }
            if (i <= posicaoInicial && i >= posicaoFinal) {
                resultado += valor
            }
        })

        let divResultado = document.getElementById("resultadoIntervalo")
        divResultado.innerText = resultado
    }
     
    vetorPares(){
        let arrayPares = []

        this.vetor.forEach((valor) => {
            if (valor%2==0){
                arrayPares.push(valor)
            }
        })
        return arrayPares
    }

    vetorImpares(){
        let arrayImpares = []

        this.vetor.forEach((valor) => {
            if (valor%2==1){
                arrayImpares.push(valor)
            }
        })
        return arrayImpares
    }
}