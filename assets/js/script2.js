var participantes = 5;
var limiteParticipantes = 6;

    function actualizarContador() {
      var contadorElemento = document.getElementById("contador");
      contadorElemento.innerText = participantes;
    }

    function agregarPersona() {
        if (participantes < limiteParticipantes){
      var nombre = "Usuario ya esta registrado"; // Cambia "Tu Nombre" por tu propio nombre o texto deseado
      var listaEspera = document.getElementById("lista-espera");
      var nuevaPersona = document.createElement("li");
      nuevaPersona.innerText = nombre;
      listaEspera.appendChild(nuevaPersona);
    
      participantes++;
      actualizarContador();
    }
    else {
        alert("Solo puedes ingresar una vez");
      }
    }

    function eliminarPersona(elemento) {
      elemento.parentNode.removeChild(elemento);
      participantes--;
      actualizarContador();
    }