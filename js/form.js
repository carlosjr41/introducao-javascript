

var botao = document.querySelector("#adicionar-paciente");
// Variaveis
botao.addEventListener("click", function (event) {
    //alert("clicando");
    event.preventDefault();

    var form = document.querySelector("#inputDados");

    var paciente = new obtemPacienteDoForm(form);
    
    var pacienteTr = montaTr(paciente);

    if (!validaPeso(paciente.peso)){
        console.log("Peso Invalido");
        return;
    }

    if (!validaAltura(paciente.altura)){
        console.log("Altura Invalida");
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);
    
    form.reset();
    

});


function obtemPacienteDoForm(form){
    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.altura.value,form.peso.value)
    };
    
    return paciente;
};

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-td"));

    return pacienteTr;
}

function montaTd(valor, classe){
    var td = document.createElement("td");
    td.textContent = valor;
    td.classList.add(classe);
    return td;
}


