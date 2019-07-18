// Consumir api para los cursos

var dos = new Vue ({
    el: '#app',

    data: function() {
        return {
            cursos: [],
        }
    },

    mounted() {
        axios.get("https://cdssa.000webhostapp.com/ApiCursos/")
        .then(res => {
            this.cursos = res.data;
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    });