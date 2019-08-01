// Consumir api para galeria

new Vue ({
    el: '#galeria',

    data: function() {
        return {
            galeria: []
        }
    },

    mounted() {
        axios.get("https://cdssa.000webhostapp.com/ApiImagenes/?tipo=1")
        .then(res => {
            this.galeria = res.data;
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    });

