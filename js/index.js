var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


//formula IMC peso/(altura * altura)
//Magreza, quando o resultado é menor que 18,5 kg/m2;
//Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;
//Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
//Obesidade, quando o resultado é maior que 30 kg/m2.


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    
    var pesoPaciente = paciente.querySelector(".info-peso")
    var peso = pesoPaciente.textContent;

    var alturaPaciente = paciente.querySelector(".info-altura");
    var altura = alturaPaciente.textContent;
    
    var infoImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturavalida = true;

    if (peso <= 0 || peso >=800) {
        pesoValido = false;
        infoImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >=3.00) {
        alturavalida = false;
        infoImc.textContent = "Altura Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturavalida) {
        var imc = peso / (altura * altura);
        infoImc.textContent = imc.toFixed(2);
    }
}

var adicionarPaciente = document.querySelector("#adicionar-paciente");
adicionarPaciente.addEventListener("click", function(e) {
    e.preventDefault();

    var form = document.querySelector("#form-adicionar");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var novoPaciente = document.querySelector("#tabela-pacientes");
    novoPaciente.appendChild(pacienteTr);

});
