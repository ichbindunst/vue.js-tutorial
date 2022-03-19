var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'hallo Vue.js!'
    },
    methods: {
      reverseMessage: function(){
        this.message = this.message.split('').reverse().join('')
      }
    }
  })

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'hello Vue!'
  }
})