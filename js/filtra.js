var campoFiltro = document.querySelector("#filtroTabela");

campoFiltro.addEventListener("input", function (event) {
    var pacientes = document.querySelectorAll(".paciente");
    
    if (this.value.length > 0) {

        for (var i = 0; i < pacientes.length; i++) {
            var campoNome = pacientes[i].querySelector(".info-nome");
            
            var regex = new RegExp(this.value,"i");

            if (!regex.test(campoNome.textContent)) {
                pacientes[i].classList.add("invisivel");
            }
            else {
                pacientes[i].classList.remove("invisivel");
            }
        }
    }
    else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");
        })
    }

});