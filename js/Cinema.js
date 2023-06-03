// criando a classe Cinema
class Cinema {
  constructor() {
    // título
    console.log("-----------------")
    console.log("Atividade Classes")

    // atributos
    this.filmes = ["Shrek", "Gato de Botas"]
    this.qtdIngressos = 4
    this.qtdIngressosVendidos = 0
  }

  // getters
  getFilmes() {
    return this.filmes
  }

  getQtdIngressos() {
    return this.qtdIngressos
  }

  // metodos
  venderIngresso() {
    if (this.qtdIngressosVendidos < this.qtdIngressos) {
      // posso vender
      this.qtdIngressosVendidos++
      return true
    } else {
      return "Esgotados!"
    }
  }
}

// criando objeto da classe Cinema
let objCinema = new Cinema

// chamando metodo da classe
console.log(objCinema.getFilmes())
