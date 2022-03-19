var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue App One'
    },
    methods: {
        greet: function(){
            return 'hallo from App one :)';
        }
    },
    computed: {
        
    }
});


var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue App Two'
    },
    methods: {
        greet: function(){
            return 'Yo dudes, this is app 2 speaking to ya';
        },
        changeTitle: function(){
            one.title = "title changed";
        }
    },
    computed: {
        
    }
});


two.title = "Changed from outside";