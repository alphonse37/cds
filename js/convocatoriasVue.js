// Consumir api para convocatorias

new Vue ({
    el: '#app2',

    data: function() {
        return {
            convocatorias: [],
            fecha_inicio: ''
        }
    },


    methods: {
       fechas: function(fecha){	
            var fecha = moment(fecha).format("DD-MM-YYYY");
            return fecha;		
        }
    },

    computed: {
        buscarFecha() {
            return this.convocatorias.filter((convocatoria) => { return convocatoria.fecha_inicio.includes(this.fecha_inicio)});
        }
    },


    mounted() {
        axios.get("http://192.168.22.147/CDS_BACKEND/Api/")
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