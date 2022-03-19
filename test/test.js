new Vue({
    el: '#vue-app',
    data: {
        numberA : 2,
        repeat_time : 0,
        

    },
    methods: {

      repeat: function () {
          console.log(this.repeat_time);

      }
    }
});
