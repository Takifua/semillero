var vp = document.getElementById("villaP");
var papel = vp.getContext("2d");
var teclas = {
    UP: 38,
    DOWN: 40,
    RIGTH: 39,
    LEFT: 37
};
var mov = 80;
var x = 250;
var y = 250;

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

/*vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollo);*/

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdo);

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarCerdo() {
    cerdo.cargaOK = true;
    dibujarr();
}

function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.objeto, 0, 0);
    }
}
function dibujarr() {
    document.addEventListener("keyup", dibujarC);
    function dibujarC(eventos) {
        console.log(eventos);
        switch (eventos.keyCode) {
            case 38:
                papel.drawImage(cerdo.objeto, x, y - 80);
                break;

            default:
                break;
        }
    }
}


//document.write(z)

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}
