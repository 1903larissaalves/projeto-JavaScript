var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


//formula IMC peso/(altura * altura)
//Magreza, quando o resultado é menor que 18,5 kg/m2;
//Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;
//Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
//Obesidade, quando o resultado é maior que 30 kg/m2.

var paciente01 = document.querySelector("#paciente01");

var pesoPaciente01 = paciente01.querySelector(".info-peso")
var peso = pesoPaciente01.textContent;

var alturaPaciente01 = paciente01.querySelector(".info-altura");
var altura = alturaPaciente01.textContent;

var pesoValido = true;
var alturavalida = true;

var infoImc = document.querySelector(".info-imc");

if (peso <= 0 || peso >=800) {
    pesoValido = false;
    infoImc.textContent = "Peso Inválido!";
}

if (altura <= 0 || altura >=3.00) {
    alturavalida = false;
    infoImc.textContent = "Altura Inválido!";
}

if (pesoValido && alturavalida) {
    var imc = peso / (altura * altura);
    infoImc.textContent = imc;
}