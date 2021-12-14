var texto = document.getElementById("tLineas");
var button = document.getElementById("boton");
button.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
function dibujarLinea(color, xI, yI, xF, yF) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xI, yI);
    lienzo.lineTo(xF, yF);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick() {   //Este es el dibujo de las lienes... :v
    var lineas = parseInt(texto.value);
    var espacio = ancho / lineas;
    alert("Yamette!!");
    var l = 0;
    var k = 0;
    var yi = 0;
    var xf = 10;
    var xi = 0;
    var yf = 10;

    while (l < lineas) {
        dibujarLinea("gray", 0, yi, xf, 300);
        l = l + 1;
        yi = espacio * l;
        xf = espacio * (l + 1);
    }
    while (k < lineas) {
        dibujarLinea("red", xi, 0, 300, yf)
        k = k + 1;
        xi = espacio * (k + 1);
        yf = espacio * k;
    }

    dibujarLinea("#AFA", 1, 1, 0, 300);
    dibujarLinea("#AFA", 1, 299, 299, 299);
    dibujarLinea("red", 1, 1, 299, 1);
    dibujarLinea("red", 299, 1, 299, 299);
}
