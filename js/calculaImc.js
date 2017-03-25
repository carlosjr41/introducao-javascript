

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
    var pesoEhValido = true;
    var alturaEhValida = true;
    //Logica 
    if (peso <= 0 || peso > 1000) {
        pesoEhValido = false;
        tdImc.textContent = "Peso Invalido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.0) {
        tdImc.textContent = "Altura Invalido";
        alturaEhValida = false;
    }

    if (pesoEhValido && alturaEhValida) {
        tdImc.textContent = calculaImc(altura,peso);
    }

}


function calculaImc(altura, peso){
    return (peso / (altura ** 2)).toFixed(2);
}


//Code





