// Consumir api para los cursos

var dos = new Vue ({
    el: '#app',

    data: function() {
        return {
            cursos: [],
        }
    },

    mounted() {
        axios.get("http://192.168.22.109:3000/cursos")
        .then(res => {
            this.cursos = res.data;
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    });