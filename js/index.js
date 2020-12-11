var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


//formula IMC peso/(altura * altura)
//Magreza, quando o resultado é menor que 18,5 kg/m2;
//Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;
//Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
//Obesidade, quando o resultado é maior que 30 kg/m2.

var pesoPaciente01 = document.querySelector(".info-peso")
var peso = pesoPaciente01.textContent;
console.log(pesoPaciente01);
console.log("O peso do paciente é " + peso);

var alturaPaciente01 = document.querySelector(".info-altura");
var altura = alturaPaciente01.textContent;
console.log(alturaPaciente01);
console.log("A altura é " + altura);

var imc;
imc = peso / (altura * altura);
console.log("O imc do paciente 01 é de " + imc);


