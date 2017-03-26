var botao = document.querySelector("#buscar-pacientes");

botao.addEventListener("click", function (event) {
    event.preventDefault();

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        
        var erro = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            var pacientes = JSON.parse(xhr.responseText);
            if (!erro.classList.contains("invisivel")){
                erro.classList.add("invisivel");
            }
                
            var tabela = document.querySelector("#tabela-pacientes");
            for (var i = 0; i < pacientes.length; i++) {

                adicionaPacienteNaTabela(pacientes[i]);
            }
        }
        else{
            
            erro.classList.remove("invisivel");
            
        }

    });

    xhr.send();
})