var participantes = 0;

    function actualizarContador() {
      var contadorElemento = document.getElementById("contador");
      contadorElemento.innerText = participantes;
    }

    function agregarPersona() {
      var nombre = "Tu Nombre"; // Cambia "Tu Nombre" por tu propio nombre o texto deseado
      var listaEspera = document.getElementById("lista-espera");
      var nuevaPersona = document.createElement("li");
      nuevaPersona.innerText = nombre;
      listaEspera.appendChild(nuevaPersona);

      participantes++;
      actualizarContador();
    }

    function eliminarPersona(elemento) {
      elemento.parentNode.removeChild(elemento);
      participantes--;
      actualizarContador();
    }