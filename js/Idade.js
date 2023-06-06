class VerificarIdade {
    constructor(idade) {
      this.idade = idade;
    }
  
    verificarVotacao() {
      console.log(`Idade: ${this.idade}`);
      console.log(this.idade);
  
      if (this.idade >= 18 && this.idade <= 65) {
        console.log("É obrigatório votar!");
      } else if (this.idade < 16) {
        console.log("Não pode votar.");
      } else {
        console.log("Não é obrigatório votar.");
      }
    }
  }
  
  let idade = 15;
  let verificador = new VerificarIdade(idade);
  verificador.verificarVotacao();
  