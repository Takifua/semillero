const app = new Vue({
    el: '#app',
    data: {
        title: 'Toy usando Vue alv',
        frutas: [
            { name: 'Sandia', cantidad: 10 },
            { name: 'Manzana', cantidad: 25 },
            { name: 'Pera', cantidad: 0 }
        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
        agregarFruta() {
            this.frutas.push({
                name: this.nuevaFruta, cantidad: 0
            });
        }
    },
    computed: {
        sumarFruta() {
            this.total = 0;
            for(fruta of this.frutas) {
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
})