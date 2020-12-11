var adicionarPaciente = document.querySelector("#adicionar-paciente");
adicionarPaciente.addEventListener("click", function(e) {
    e.preventDefault();

    var form = document.querySelector("#form-adicionar");

    var paciente = obterPacienteFormulario(form);

    var pacienteTr = montaLinha(paciente);
    
    var novoPaciente = document.querySelector("#tabela-pacientes");
    novoPaciente.appendChild(pacienteTr);

    form.reset();

});

function obterPacienteFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaLinha(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.classList.add("info-nome");
    pesoTd.classList.add("info-peso");
    alturaTd.classList.add("info-altura");
    gorduraTd.classList.add("info-gordura");
    imcTd.classList.add("info-imc");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);


    return pacienteTr;
}