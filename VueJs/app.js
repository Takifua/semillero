const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Gym con Vue',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        agragarTarea: function () {
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = '';
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
        },
        editarTarea: function (index) {
            this.tareas[index].estado = !this.estado;
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
        },
        eliminar: function (index) {
            this.tareas.splice(index, 1)
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
        }
    },
    created: function () {
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'))
        if(datosDB === null){
            this.tareas = [];
        }else {
            this.tareas = datosDB;
        }
    }

});