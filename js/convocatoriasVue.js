// Consumir api para convocatorias

new Vue ({
    el: '#app2',

    data: function() {
        return {
            convocatorias: [],
            noticia_titulo_cas:''
        }
    },


    methods: {
       fechas: function(fecha){	
            var fecha = moment(fecha).format("DD-MM-YYYY");
            return fecha;		
        }
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