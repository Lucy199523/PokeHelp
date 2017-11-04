//declarando canvas
var villa = document.getElementById("canvas");
var papel = villa.getContext("2d");
//detectando teclado
document.addEventListener("keydown", mover);
var tecla = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
//mover al cerdo
var cerdox = 0,
  cerdoy = 0;

function mover(evento) {
  var movimiento = 71;
  switch (evento.keyCode) {
    case tecla.UP:
      if (cerdoy > 0) {
        cerdoy -= movimiento;
        dibujar(cerdox, cerdoy);
      }
      break;
    case tecla.DOWN:
      if (cerdoy <= 425) {
        cerdoy += movimiento;
        dibujar(cerdox, cerdoy);
      }
      break;
    case tecla.RIGHT:
      if (cerdox < 425) {
        cerdox += movimiento;
        dibujar(cerdox, cerdoy);
      }
      break;
    case tecla.LEFT:
      if (cerdox > 0) {
        cerdox -= movimiento;
        dibujar(cerdox, cerdoy);
      }
      break;
    default:
  }
}
//Cargando las imagenes...
var cerdo = {
  url: "img/cerdo.png",
  cargaOK: false
};
var fondo = {
  url: "img/tile.png",
  cargaOK: false
};
var vaca = {
  url: "img/vaca.png",
  cargaOK: false
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);


//dibujando las imagenes...
function cargarCerdo() {
  cerdo.cargaOK = true;
  dibujar();
}

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarVaca() {
  vaca.cargaOK = true;
  dibujar();
}
var vacax = 240,
  vacay = 240;

function dibujar() {
  if (fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (cerdo.cargaOK) {
    papel.drawImage(cerdo.imagen, cerdox, cerdoy);
  }
  if (vaca.cargaOK) {
    var vacas = 20;
    for (var i = 0; i < vacas; i++) {
      vacax = aleatorio(0, 7);
      vacay = aleatorio(0, 7);
      vacax *= 71;
      vacay *= 71;
      if ((vacax < 432 && vacax > -16) && (vacay < 432 && vacay > -16)) {
        papel.drawImage(vaca.imagen, vacax, vacay);
      }
    }
  }
}

//generar un numero aleatorio
function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}