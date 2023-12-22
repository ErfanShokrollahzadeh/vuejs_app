let myApplicatin

myApplicatin = new Vue({
    el: '#app',
    data: {
        title: 'Hello vue.js',
        link: 'http://toplearn.com'
    },
    methods: {
        ChangeTitle: function (event) {
            this.title = event.target.value;
        },
        SayHellow: function () {
            return 'Hello toplearn'
        },
        SayBy: function () {
            return this.title;
        }
    }
});