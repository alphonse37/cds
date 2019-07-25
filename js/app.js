// Consumir api para convocatorias

new Vue ({
    el: '#galeria',

    data: function() {
        return {
            galeria: []
        }
    },

    mounted() {
        axios.get("https://pmpu.000webhostapp.com/api/categoria/")
        .then(res => {
            this.galeria = res.data;
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    });

    // https://www.youtube.com/watch?v=QP6n_X4aVMY