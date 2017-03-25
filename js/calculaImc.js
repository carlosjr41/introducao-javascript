

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {
    calculaImc(pacientes[i]);
}

//Funcoes
function calculaImc(paciente) {
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
        paciente.style.backgroundColor = "LightYellow";
    }

    if (pesoEhValido && alturaEhValida) {
        tdImc.textContent = (peso / (altura ** 2)).toFixed(3);
        paciente.style.backgroundColor = "LightGreen";
    }

}





//Code





