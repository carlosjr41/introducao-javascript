
var botao = document.querySelector("#adicionar-paciente");
// Variaveis
botao.addEventListener("click", function (event) {
    //alert("clicando");
    event.preventDefault();

    console.log("clicou");
    var form = document.querySelector("#inputDados");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var gordura = form.gordura.value;
    var altura = form.altura.value;

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");

    var pesoTd = document.createElement("td");
    pesoTd.classList.add("info-peso");

    var gorduraTd = document.createElement("td");
    gorduraTd.classList.add("info-gordura");

    var alturaTd = document.createElement("td");
    alturaTd.classList.add("info-altura");

    var imcTd = document.createElement("td");
    imcTd.classList.add("info-imc");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;
    alturaTd.textContent = altura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    console.log(tabela);
    tabela.appendChild(pacienteTr);

    var pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
        calculaImc(pacientes[i]);
    }

})