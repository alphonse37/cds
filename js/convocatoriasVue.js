// Consumir api para convocatorias

new Vue ({
    el: '#app2',

    data: function() {
        return {
            convocatorias: [],
            buscarFecha: null,
        }
    },


    methods: {
       fechas: function(fecha){	
            var fecha = moment(fecha).format("DD-MM-YYYY");
            return fecha;		
        }
    },

    computed: {
        filtrarFecha() {
            var vm = this;
            var buscarFecha = vm.buscarFecha;
           
            return _.filter(vm.data.convocatorias, (function(data) {
                if (_.isNull(buscarFecha)) {
                    return true
                } else {
                    var fecha = data.fecha;
                    return (fecha == buscarFecha);
                }
            }))
        }
        // buscarFecha() {
        //     return this.convocatorias.filter((convocatoria) => { return convocatoria.fecha_inicio.includes(this.fecha_inicio)});
        // }
    },


    mounted() {
        axios.get("https://cdssa.000webhostapp.com/ApiEventos/")
        .then(res => {
            this.convocatorias = res.data;
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    });

    // https://www.youtube.com/watch?v=QP6n_X4aVMY