let myApplicatin;

myApplicatin = new Vue({
    el: '#app',
    data: {
        title: 'Hello vue.js'
    },
    methods: {
        ChangeTitle: function (event) {
            this.title = event.target.value;
        }
    }
});