// Variables iniciales
var x = 10, y = 0;
let contador = 0;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Función para dibujar la primera puerta
function dibujarPrimeraPuerta() {
    var img = document.getElementById('Puerta');
    ctx.drawImage(img, x, y, 500, 600);
}

// Función para dibujar otros elementos con tamaño ajustado
function dibujarElemento(id, posX, posY, width, height, visible= true) {
    var img = document.getElementById(id);
    ctx.drawImage(img, posX, posY, width, height);
    if (!visible) ctx.globalAlpha = 0;
    else ctx.globalAlpha = 1;
}

function BorrarElemento(id, posX, posY, width, height) {
    ctx.clearRect(posX, posY, width, height);
    
}

// Dibuja los elementos detrás de la primera puerta
dibujarElemento('Puerta Abierta', x, y, 500, 600);
dibujarElemento('Enemigo', x + 150, y + 200, 200, 150); 
dibujarElemento('Aliado', x + 200, y + 250, 150, 100); 

// Dibuja la primera puerta al frente
dibujarPrimeraPuerta();

// Segunda puerta
x = 500;
dibujarElemento('Puerta Abierta', x, y, 500, 600);
dibujarElemento('Enemigo', x + 150, y + 200, 200, 150); 
dibujarElemento('Aliado', x + 200, y + 250, 150, 100); 
var imgPuerta2 = document.getElementById('Puerta');
ctx.drawImage(imgPuerta2, x, y, 500, 600);

// Tercera puerta
x = 1000;
dibujarElemento('Puerta Abierta', x, y, 500, 600);
dibujarElemento('Enemigo', x + 150, y + 200, 200, 150); 
dibujarElemento('Aliado', x + 200, y + 250, 150, 100); 
var imgPuerta3 = document.getElementById('Puerta');
ctx.drawImage(imgPuerta3, x, y, 500, 600);