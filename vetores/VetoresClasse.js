class Vetores {
    constructor() {
        //atributos
        this.vetor = [78, 94, 36, 98, 54, 43, 32, 18, 5, 28, 64, 21]
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
}