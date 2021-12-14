var teclas = {
    UP: 38,
    DOWN: 40,
    RIGTH: 39,
    LEFT: 37
};

document.addEventListener("keydown", dibujarTeclado);
//document.addEventListener("mousedown", dibujarMouse);
var cuadrito = document.getElementById("areaDibujo");
cuadrito.addEventListener("mousedown", dibujarMouse);
cuadrito.addEventListener("mousemove", dibujarMouse);
var papel = cuadrito.getContext("2d")
var colorsito = "green"
function dibujarLinea(color, xI, yI, xF, yF, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 5;
    lienzo.moveTo(xI, yI);
    lienzo.lineTo(xF, yF);
    lienzo.stroke();
    lienzo.closePath();
}

var x = 150;
var y = 150;
var mov = 1;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarMouse(mouse) {
    var xmf = mouse.clientX;
    var ymf = mouse.clientY;
    if (mouse.buttons == 1) {
        dibujarLinea(colorsito, xmf, ymf, xmf + 5, ymf + 5, papel)
        console.log(mouse);
    }
}

function dibujarTeclado(evento) {
    switch (evento.keyCode) {
        case 38: //up
            dibujarLinea(colorsito, x, y, x, y - mov, papel);
            y = y - mov;
            break;
        case 40: //down
            dibujarLinea(colorsito, x, y, x, y + mov, papel);
            y = y + mov;
            break;
        case 39: //rigth
            dibujarLinea(colorsito, x, y, x + mov, y, papel);
            x = x + mov;
            break;
        case 37: //left
            dibujarLinea(colorsito, x, y, x - mov, y, papel);
            x = x - mov;
            break;

        default:
            break;
    }
}