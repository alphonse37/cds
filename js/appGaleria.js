// componente de VUE que consume la api para la galeria
Vue.component('expandable-image', {
    template: '#expandable-image',
    data () {
      return {
        expanded: false,
        closeButtonRef: null
      }
    },
  
    methods: {
      closeImage (event) {
        this.expanded = false
        event.stopPropagation()
      },
      freezeVp (e) {
        e.preventDefault()
      }
    },
  
    watch: {
      expanded (status) {
        this.$nextTick(() => {
          if (status) {
            this.cloned = this.$el.cloneNode(true)
            this.closeButtonRef = this.cloned.querySelector('.close-button')
            this.closeButtonRef.addEventListener('click', this.closeImage)
            document.body.appendChild(this.cloned)
            document.body.style.overflow = 'hidden'
            this.cloned.addEventListener('touchmove', this.freezeVp, false);
            setTimeout(() => {
              this.cloned.style.opacity = 1
            }, 0)
          } else {
            this.cloned.style.opacity = 0
            this.cloned.removeEventListener('touchmove', this.freezeVp, false);
            setTimeout(() => {
              this.closeButtonRef.removeEventListener('click', this.closeImage)
              this.cloned.remove()
              this.cloned = null
              this.closeButtonRef = null
              document.body.style.overflow = 'auto'
            }, 250)
          }
        })
      }
    }
  })



new Vue ({
    el: '#galeria',

  data: {
    galeria: []
  },

  mounted () {
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

