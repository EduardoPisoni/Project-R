// criando a classe Repeticao
class Repeticao {
  constructor(){
    // título
    console.log("-----------------")
    console.log("Atividade Laços de Repetição")

    // atributos
    this.tamanho = 10
  }

  tabuadaUnicaFor(numero){
    console.log("Tabuada do " + numero)
    for(let i = 1; i <= this.tamanho; i++){
      console.log(`${numero} x ${i} = ${numero * i}`)
    }
  }

  tabuadasFor(){
    for(let i = 1; i <= this.tamanho; i++){
      console.log("Tabuada do " + i)
      for(let j = 1; j <= this.tamanho; j++){
        console.log(`${i} x ${j} = ${i * j}`)
      }
      console.log('----')
    }
  }

  tabuadaUnicaWhile(numero){
    console.log("Tabuada do " + numero)
    let i = 1
    while(i <= this.tamanho) {
      console.log(`${numero} x ${i} = ${numero * i}`)
      i++
    }
  }
}

let objRepeticao = new Repeticao

console.log(objRepeticao.tabuadaUnicaFor(4))