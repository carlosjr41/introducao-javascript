

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {
    imc(pacientes[i]);
}

//Funcoes
function imc(paciente) {
    var altura = paciente.querySelector(".info-altura").textContent;
    var peso = paciente.querySelector(".info-peso").textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    //Logica 
    if (!pesoEhValido) {
        tdImc.textContent = "Peso Invalido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        tdImc.textContent = "Altura Invalido";
       
    }

    if (pesoEhValido && alturaEhValida) {
        tdImc.textContent = calculaImc(altura,peso);
    }

}


function calculaImc(altura, peso){
    return (peso / (altura ** 2)).toFixed(2);
}

function validaPeso(peso){
    return peso >= 0 && peso < 1000;
}

function validaAltura(altura){
    return altura >0 && altura <3.0;
}






