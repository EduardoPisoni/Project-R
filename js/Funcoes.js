// criando a classe Funcoes
class Funcoes {

  // método base de uma classe
  // é executado quando uma nova instância é criada
  // dentro dele são definidos os atributos
  constructor(){

    // título
    console.log("-----------------")
    console.log("Atividade Funções")
  }

  // arrow function
  formatArrow = (x, y, tipo, resultado) => `${x} ${tipo} ${y} = ${resultado}`

  // função de formatação
  format(x, y, tipo, resultado){
    return `${x} ${tipo} ${y} = ${resultado}`
  }

  // função de cálculo
  calc(x, y, tipo) {
    switch (tipo) {
      case "+":
        return this.formatArrow(x, y, tipo, x + y)
      case "-":
        return this.formatArrow(x, y, tipo, x - y)
      case "/":
        return this.format(x, y, tipo, x / y)
      case "*":
        return this.format(x, y, tipo, x * y)
    }
  }
}

// criando uma nova instância da classe Funcoes
let objFuncoes = new Funcoes

// chamando um método da classe
console.log(objFuncoes.calc(5, 5, "+"))