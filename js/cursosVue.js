// Consumir api para los cursos

var dos = new Vue ({
    el: '#app',

    data: function() {
        return {
            cursos: [],
        }
    },

    mounted() {
        axios.get("http://192.168.22.147/CDS_BACKEND/Api/")
        .then(res => {
            this.cursos = res.data;
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    });