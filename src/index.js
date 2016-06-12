import Vue from 'vue'

window.addEventListener('DOMContentLoaded', () => {
  const isProduction = process.env.NODE_ENV === 'production'
  const iframeSrcDefault = localStorage.getItem('width-adjuster') || 'release'
  const historyPathname = location.hash.slice(1)
  new Vue({
    el: '#root',
    data: {
      iframeSrc: historyPathname || (isProduction ? iframeSrcDefault : 'example.html'),
      width: localStorage.getItem('width') || 800,
      dragging: false
    },
    ready () {
      this.$watch('width', (width) => {
        localStorage.setItem('width', width)
      })
    },
    methods: {
      startDrag (event) {
        event = event.changedTouches ? event.changedTouches[0] : event
        const self = this
        const resize = (event) => {
          event = event.changedTouches ? event.changedTouches[0] : event
          const width = (event.pageX - window.innerWidth / 2) * 2
          self.width = width > 0 ? width : 0
        }
        const abort = () => {
          window.removeEventListener('mousemove', resize)
          window.removeEventListener('mouseup', abort)
          self.dragging = false
        }
        self.dragging = true
        window.addEventListener('mousemove', resize)
        window.addEventListener('mouseup', abort)
      },
      resize: function (event, px) {
        this.width = px || window.innerWidth
      }
    }
  })
})
