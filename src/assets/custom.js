let myApplicatin

myApplicatin = new Vue({
    el: '#app',
    data: {
        title: 'Hello vue.js',
        link: 'http://toplearn.com',
        counter: 0,
        secondcounter: 0,
        x: 0,
        y: 0,
        resutl: '',
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
            this.counter++;
            // object.counter += step;
            this.resutl = this.counter > 5 ? 'Bigger than 5' : 'Smaller than 5';
        },
        Decrease: function (step, object) {
            // debugger;
            this.counter--;
            // object.counter += step;
            this.resutl = this.counter > 5 ? 'Bigger than 5' : 'Smaller than 5';
        },
        GetCursor: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        test: function (event) {
            event.stopPropagation();
        },
        alert: function () {
            alert('Hello');
        },
        GetResult: function () {
            return this.counter > 5 ? 'Bigger than 5' : 'Smaller than 5';
        }
    },
    computed: {
        GetComputedResult: function () {
            return this.counter > 5 ? 'Bigger than 5' : 'Smaller than 5';
        }
    }
});