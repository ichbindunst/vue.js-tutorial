new Vue({
    el: '#vue-app',
    data: {
        output: 'your fav food'
    },
    methods: {
        readRefs: function(){
            console.log(this.$refs.input.value);
            this.output = this.$refs.input.value;
        }
    }
});
