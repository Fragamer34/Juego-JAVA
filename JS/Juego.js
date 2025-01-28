var STARTGAME = document.getElementById('STARTGAME');

STARTGAME.addEventListener('click', function(e) {

console.log('Juego iniciado');
STARTGAME.style.display = 'none';
BucleTiempo();

})
document.addEventListener('keydown', function(event) {

    switch(event.key) {
        case "p":
            console.log('Tecla presionada: ', event.key);
            STARTGAME.style.display = 'Block';
            contador = 5;

          break;
        case "z":
            console.log('Tecla presionada: ', event.key);
            var Disparo = document.getElementById('Disparo');
            Disparo.style.display = 'block';
            x = 10;
            dibujarElemento('Disparo', x + 200, y + 250, 150, 100);
            
          break;
        case "x":
            console.log('Tecla presionada: ', event.key);
            var Disparo = document.getElementById('Disparo');
            x = 500;
            Disparo.style.display = 'block';
            dibujarElemento('Disparo', x + 200, y + 250, 150, 100);
          break;
        case "c":
            console.log('Tecla presionada: ', event.key);
            var Disparo = document.getElementById('Disparo');
            x = 1000;
            Disparo.style.display = 'block';
            dibujarElemento('Disparo', x + 200, y + 250, 150, 100);
          break;
        
      }
})

function BucleTiempo() {
    

console.log("Inicio del setInterval");

// Ejecuta esta función cada 2 segundos (2000 milisegundos)
let intervalo = setInterval(function() {
  //contador++;
  console.log("Contador:", contador);

  // Detenemos el intervalo después de 5 repeticiones
  if (contador === 5) {
    clearInterval(intervalo);
    console.log("Intervalo detenido después de 5 repeticiones");
  }
  //Borrar disparos
  x= 5
  dibujarPrimeraPuerta();

  x=500
  dibujarPrimeraPuerta();

  x=1000
  dibujarPrimeraPuerta();
}, 2000);
}

