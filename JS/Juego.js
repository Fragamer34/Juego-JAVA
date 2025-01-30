var STARTGAME = document.getElementById('STARTGAME');

// AÑADIMOS UN LISTENER AL CLICK DEL BOTON de inicio
STARTGAME.addEventListener('click', function (e) {

  console.log('Juego iniciado');
  STARTGAME.style.display = 'none';
  puntuacion = 0; // empiaza partida, 0 puntos
  iniciar();
  BucleTiempo();

})

// añadimos un listener a la pulsacion de teclas
document.addEventListener('keydown', function (event) {

  switch (event.key) {
    case "p":
      console.log('Tecla presionada: ', event.key);
      STARTGAME.style.display = 'Block';

      iniciar(); // limpiar todo (pintar puertas cerradas)

      contador = 5; // FUERZA FI8N DEL BUCLE DE JUEGO

      //            alert("Juego terminado por usuario");

      break;
    case "z": //Disparo puerta 1
      console.log('Tecla presionada: ', event.key);
      var Disparo = document.getElementById('Disparo');
      Disparo.style.display = 'block';
      x = 10;
      dibujarElemento('Disparo', x + 200, y + 250, 150, 100);

      if (personaje1 === 1) { // hemos disparado a un aliado
        // fin juego, hemos matado un aliado
        STARTGAME.style.display = 'Block';
        //              iniciar(); // limpiar todo (pintar puertas cerradas)
        contador = 5; // FUERZA FI8N DEL BUCLE DE JUEGO
      }
      if (personaje1 === 2) { // hemos disparado a un enemigo
        // matado enemigo, cerramos puerta y sumamos puntos
        semaforo1 = false; // cerramos la puerta
        puntuacion += 10;
      }


      break;
    case "x": //Disparo puerta 2
      console.log('Tecla presionada: ', event.key);
      var Disparo = document.getElementById('Disparo');
      x = 500;
      Disparo.style.display = 'block';
      dibujarElemento('Disparo', x + 200, y + 250, 150, 100);

      if (personaje2 === 1) { // hemos disparado a un aliado
        // fin juego, hemos matado un aliado
        STARTGAME.style.display = 'Block';
        //              iniciar(); // limpiar todo (pintar puertas cerradas)
        contador = 5; // FUERZA FI8N DEL BUCLE DE JUEGO
      }
      if (personaje2 === 2) { // hemos disparado a un enemigo
        // matado enemigo, cerramos puerta y sumamos puntos
        semaforo2 = false; // cerramos la puerta
        puntuacion += 10;
      }
      break;
    case "c": //Disparo puerta 3
      console.log('Tecla presionada: ', event.key);
      var Disparo = document.getElementById('Disparo');
      x = 1000;
      Disparo.style.display = 'block';
      dibujarElemento('Disparo', x + 200, y + 250, 150, 100);

      if (personaje3 === 1) { // hemos disparado a un aliado
        // fin juego, hemos matado un aliado
        STARTGAME.style.display = 'Block';
        //              iniciar(); // limpiar todo (pintar puertas cerradas)
        contador = 5; // FUERZA FI8N DEL BUCLE DE JUEGO
      }
      if (personaje3 === 2) { // hemos disparado a un enemigo
        // matado enemigo, cerramos puerta y sumamos puntos
        semaforo3 = false; // cerramos la puerta
        puntuacion += 10;
      }
      break;

  }
})

// Bucle de juego principal, se ejkecuta cada segundo y en el se controla toda la mecanica del juego
function BucleTiempo() {

  console.log("Iniciando el bucle del juego");

  // Ejecuta esta función cada 2 segundos (2000 milisegundos)
  let intervalo = setInterval(function () {

    // Detenemos el intervalo después de 5 repeticiones, 
    // presionando P o cuando el jugador muere se iguala contador a 5 para romper el bucle
    if (contador === 5) {

      clearInterval(intervalo);
      console.log("Fin del bucle de juego");

    }

    //Abrir puertas aleatoriamente
    AbrirPuertas();

    //Antes de finalizar el bucle redibujar poantalla
    RedibujarPantalla();

  }, velocidad); // fin timer

} // Fin bucle juego

//funcion inicia todas las variables
function iniciar() {

  // Inicializacion de variables
  contador = 0;
  semaforo1 = false;
  contador1 = 0;
  semaforo2 = false;
  contador2 = 0;
  semaforo3 = false;
  contador3 = 0;
  personaje1 = 0;
  personaje2 = 0;
  personaje3 = 0;

  // Pintamos puertas cerradas
  x = 5
  dibujarPrimeraPuerta();
  x = 500
  dibujarPrimeraPuerta();
  x = 1000
  dibujarPrimeraPuerta();

}

// Funcion para controlar quer puertas se abren
function AbrirPuertas() {

  if (semaforo1 === false) { // Si la puerta esta cerrada hacemos el random para ver si se abre
    AbrirPuerta(1, 5);
  } else {
    contador1++;
    console.log("Contador1:", contador1, Date.now());
  }
  if (contador1 === pasoDeBucle) { // si la puerta ya lleva abiuerta 5 segundos la cerramos
    if (personaje1 === 2) { // Si hay un enemigo
      // fin juego, nos mata un enemigo
      STARTGAME.style.display = 'Block';
      //iniciar(); // limpiar todo (pintar puertas cerradas)
      contador = 5; // FUERZA FI8N DEL BUCLE DE JUEGO

    }

    semaforo1 = false;
  }
  if (semaforo2 === false) { // Si la puerta esta cerrada hacemos el random para ver si se abre 
    AbrirPuerta(2, 500);
  } else {
    contador2++;
    console.log("Contador2:", contador2);
  }
  if (contador2 === pasoDeBucle) {  // si la puerta ya lleva abiuerta 5 segundos la cerramos
    if (personaje2 === 2) { // Si hay un enemigo
      // fin juego, nos ha matado un enemigo
      STARTGAME.style.display = 'Block';
      //iniciar(); // limpiar todo (pintar puertas cerradas)
      contador = 5; // FUERZA FI8N DEL BUCLE DE JUEGO

    }

    semaforo2 = false;
  }

  if (semaforo3 === false) { // Si la puerta esta cerrada hacemos el random para ver si se abre
    AbrirPuerta(3, 1000);
  } else {
    contador3++;
    console.log("Contador3:", contador3);
  }
  if (contador3 === pasoDeBucle) {  // si la puerta ya lleva abiuerta 5 segundos la cerramos
    if (personaje3 === 2) { // Si hay un enemigo
      // fin juego,nos mata el enemigo
      STARTGAME.style.display = 'Block';
      //iniciar(); // limpiar todo (pintar puertas cerradas)
      contador = 5; // FUERZA FI8N DEL BUCLE DE JUEGO

    }

    semaforo3 = false;
  }

} // fin abrir puertas

// Funcion quer genera un numero aleatorio y abre la puerta
function AbrirPuerta(numPuerta, offset) {

  indicador = Math.random();
  if (indicador < 0.1) {

    // se abre la puerta
    x = offset;
    //    dibujarPuertaAbierta();;
    switch (numPuerta) { // puerta para la que hemos hecho el random
      case 1:
        semaforo1 = true;
        contador1 = 0;
        break;
      case 2:
        semaforo2 = true;
        contador2 = 0;
        break;
      case 3:
        semaforo3 = true;
        contador3 = 0;
        break;
    }

    //  si se abre la puerta es pq hay que mostrar un aliado o enemigo
    personaje = Math.random();
    if (personaje < 0.5) { // aliado
      //      dibujarElemento('Aliado', offset, y, 500, 600);
      switch (numPuerta) { // puerta para la que hemos hecho buscado personaje
        case 1:
          personaje1 = 1; // aliado es 1 en puerta 1 
          break;
        case 2:
          personaje2 = 1; // aliado es 1 en puerta 2
          break;
        case 3:
          personaje3 = 1; // aliado es 1 en puerta 3
          break;
      }
    }
    else { // enemigo
      //      dibujarElemento('Enemigo', offset, y, 500, 600);
      switch (numPuerta) { // puerta para la que hemos hecho buscado personaje
        case 1:
          personaje1 = 2; // enemigo es 2 en puerta 1 
          break;
        case 2:
          personaje2 = 2; // enemigo es 2 en puerta 2
          break;
        case 3:
          personaje3 = 2; // enemigo es 2 en puerta 3
          break;
      }
    }

  }

}

function dibujarPuertaAbierta(offset) {
  dibujarElemento('Puerta Abierta', offset, y, 500, 600);
}

function RedibujarPantalla() {
  //Borrar disparos
  if (semaforo1 === true) {
    dibujarPuertaAbierta(5);
    if (personaje1 === 1) { // es un aliado
      dibujarAliado(coordX1);
    }
    else if (personaje1 === 2) { // es un enemigo
      dibujarEnemigo(coordX1);
    }

  }
  else {
    x = 5
    dibujarPrimeraPuerta();
  }


  if (semaforo2 === true) {
    dibujarPuertaAbierta(500);
    if (personaje2 === 1) { // es un aliado
      dibujarAliado(coordX2);
    }
    else if (personaje2 === 2) { // es un enemigo
      dibujarEnemigo(coordX2);
    }

  }
  else {
    x = 500
    dibujarPrimeraPuerta();
  }

  if (semaforo3 === true) {
    dibujarPuertaAbierta(1000);
    if (personaje3 === 1) { // es un aliado
      dibujarAliado(coordX3);
    }
    else if (personaje3 === 2) { // es un enemigo
      dibujarEnemigo(coordX3);
    }

  }
  else {
    x = 1000;
    dibujarPrimeraPuerta();
  }

}

function dibujarAliado(offset) {
  dibujarElemento('Aliado', offset, alturaPersonaje, 350, 300);
}

function dibujarEnemigo(offset) {
  dibujarElemento('Enemigo', offset, alturaPersonaje, 350, 300);
}
