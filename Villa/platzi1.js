var vp = document.getElementById("villaP");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
};
var vaca = {
    url: "vaca.png",
    cargaOK: false
};
var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};
var pollo = {
    url: "pollo.png",
    cargaOK: false
};

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollo);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdo);

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}
function cargarVaca() {
    vaca.cargaOK = true;
    dibujar();
}
function cargarPollo() {
    pollo.cargaOK = true;
    dibujar();
}
function cargarCerdo() {
    cerdo.cargaOK = true;
    dibujar();
}

function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.objeto, 0, 0);
    }

    if (vaca.cargaOK) {
        for (var v = 0; v < 5; v++) {
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(vaca.objeto, x, y);
        }
    }

    if (cerdo.cargaOK) {
        for (var v = 0; v < 5; v++) {
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(cerdo.objeto, x, y);
        }
    }

    if (pollo.cargaOK) {
        for (var v = 0; v < 5; v++) {
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(pollo.objeto, x, y);
        }
    }
}

//document.write(z)

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}
