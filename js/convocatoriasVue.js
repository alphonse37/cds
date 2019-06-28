// Consumir api para convocatorias

new Vue ({
    el: '#app2',

    data: function() {
        return {
            convocatorias: []
        }
    },

    methods: {
       fechas: function(fecha){	
            var fecha = moment(fecha).format("DD-MM-YYYY");
            return fecha;		
        }
    },


    mounted() {
        axios.get("http://192.168.22.109:3000/eventos")
        .then(res => {
            this.convocatorias = res.data;
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    });