let globalObj

function load(){
  globalObj = new Contador2()
}

function startContador(){
  let valorInicial = document.getElementById('inputInicial').value
  let valorFinal = document.getElementById('inputFinal').value
  
  if(valorInicial !== '' || valorFinal !== ''){
    let contadorObj = new Contador(+valorInicial, +valorFinal)
    contadorObj.contador()
  }
}

function startContador2(){
  let valorInicial = document.getElementById('inputInicial').value
  let valorFinal = document.getElementById('inputFinal').value
  
  if(valorInicial !== '' || valorFinal !== ''){
    globalObj.contador2(+valorInicial, +valorFinal, +valorInicial)
  }
}