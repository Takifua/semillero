class Billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero() {
    var t = document.getElementById("dinero");
    var n = 0;
    dinero = parseInt(t.value);
    for (var bi of caja) {
        var suma = bi.cantidad * bi.valor;
        console.log(suma);
        if (dinero > 0) {
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad) {
                papeles = bi.cantidad
                //console.log(bi.cantidad);
            }
            else {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
            caja[n++] = (new Billete(bi.valor, (bi.cantidad - papeles)));
        }
    }
    if (dinero > 0) {
        r.innerHTML = "No tengo suficiente dinero";
    } else {
        for(var e of entregado){
            if(e.cantidad > 0){

            }
            r.innerHTML = r.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br />";
        }
    }

}

var caja = [];
var entregado = [];
caja.push(new Billete(50, 5));
caja.push(new Billete(20, 3));
caja.push(new Billete(10, 2));
var dinero = 0;
var div = 0;
var papeles = 0;
var r = document.getElementById("resultado")

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

