let myApplicatin

myApplicatin = new Vue({
    el: '#app',
    data: {
        title: 'Hello vue.js',
        link: 'http://toplearn.com',
        counter: 5,
        x: 0,
        y: 0,
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
        },
        Increase: function (step, object) {
            // debugger;
            this.counter += step;
        },
        GetCursor: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
    }
});