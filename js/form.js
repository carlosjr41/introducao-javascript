

var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function (event) {
    //alert("clicando");
    event.preventDefault();

    var form = document.querySelector("#inputDados");

    var paciente =  obtemPacienteDoForm(form);

    

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {

        mensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML="";

});


function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
};

function obtemPacienteDoForm(form) {
    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.altura.value, form.peso.value)
    };
    console.log(paciente);
    return paciente;
};

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-td"));

    return pacienteTr;
};

function montaTd(valor, classe) {
    var td = document.createElement("td");
    td.textContent = valor;
    td.classList.add(classe);
    return td;
};

function validaPaciente(paciente) {
     var erros = [];

    for (campo in paciente){
        if (paciente[campo].length == 0){
            erros.push("Nenhum campo pode ser vazio");
            break;
        }
    }

   
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida!");
    }
    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido!");
    }

    return erros;
};

function mensagensDeErro(erros) {
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    for (var i = 0; i < erros.length; i++) {
        var li = document.createElement("li");
        li.textContent = erros[i];
        ul.appendChild(li);
    }
}


