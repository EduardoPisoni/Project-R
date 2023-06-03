class Contador {
  constructor(inicial, final){
    this.inicial = inicial
    this.final = final
    this.atual = inicial

    // true   aumentando
    // false  reduzindo
    this.direcao = inicial > final ? false : true
  }

  contador(id = ""){
    if(this.inicial == this.final){
      return
    }

    let div = document.getElementById('contadorDiv')
    
    let h2
    if(document.getElementById(id) != null){
      h2 = document.getElementById(id)
      h2.id = id
    } else {
      h2 = document.createElement("h2")
      h2.id = `${Date.now()}`
      div.append(h2)
    }
    h2.innerHTML = this.atual

    

    if(this.atual !== this.final){
      document.getElementById('mensagem').innerHTML = ""
      setTimeout(() => {
        this.direcao ? this.atual++ : this.atual--
        this.contador(h2.id)
      }, 1000)
    } else {
      //document.getElementById('mensagem').innerHTML = "Acabou!"
    }
  }
}

class Contador2 {
  constructor(){
    this.runs = 0
  }

  getDirecao(inicial, final){
    // true   aumentando
    // false  reduzindo
    return inicial > final ? false : true
  }

  contador2(inicial, final, atual, run = 0){
    if(inicial == final){
      return
    }

    if(run == 0){
      this.runs++
      run = this.runs
    }

    let div = document.getElementById('contador2Div')
    div.innerHTML = atual

    if(atual !== final){
      document.getElementById('mensagem').innerHTML = ""
      setTimeout(() => {
        this.getDirecao(inicial, final) ? atual++ : atual--
        if(run == this.runs){
          this.contador2(inicial, final, atual, run)
        } else {
          console.log('parou')
        }
      }, 1000)
    } else {
      //document.getElementById('mensagem').innerHTML = "Acabou!"
    }
  }
}