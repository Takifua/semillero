class Pakiman {
    constructor(n, l, a) {
        this.imagenes = new Image();
        this.name = n;
        this.ps = l;
        this.attack = a;

        this.imagenes.src = imagenes[this.name];
    }
    hablar() {
        alert(this.name + "!!");
    }
    mostrar(){
        document.write("</p>");
        document.body.appendChild(this.imagenes);
        document.write("<br /><strong>" + this.name + "</strong><br />");
        document.write("vida: " + this.ps + "<br />");
        document.write("Ataque: " + this.attack);
        document.write("<hr></p>");
    }
}