let myApplicatin
let app2
let app3

myApplicatin = new Vue({
    el: '#app1',
    data: {
        title: 'This is app 1',
        link: 'http://toplearn.com',
        counter: 0,
        secondcounter: 0,
        x: 0,
        y: 0,
        resutl: '',
        color: 'red',
        width: '150',
        attachRed: true,
        className: '',
        show: false,
        test: true,
        names: ['mohammad', 'iman', 'elnaz'],
        persons: [
            {name: 'mohhamad', family: 'mohammadi', age: 20},
            {name: 'reza', family: 'mohammadi', age: 12}
        ],
        IsShowTitle: true,
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
        },
        ShowTitle: function () {
            this.IsShowTitle = true;
        },
        HideTitle: function () {
            this.IsShowTitle = false;
        },
    },
    computed: {
        GetComputedResult: function () {
            return this.counter > 5 ? 'Bigger than 5' : 'Smaller than 5';
        },
        MyStyle: function () {
            return {
                backgroundColor: 'red',
                width: '150px'
            }
        },
        Class1: function () {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        }
    },
    watch: {
        counter: function (value) {
            if (value > 10) {
                setInterval(() => {
                    this.counter = 0;
                }, 3000);
            }
        },
        title: function () {
            alert('title is changed')
            this.$refs.showtitlebutton.innerText = 'change by ref';
        }
    }
});

myApplicatin.newTitle = 'new title'; // this is not reactive or native

console.log(myApplicatin);
setTimeout(() => {
    myApplicatin.title = 'changed by timer';
}, 3000);


app2 = new Vue({
    el: '#app2',
    data: {
        title: 'This is app 2',
        IsShowTitle: true,
    },
    methods: {
        ShowTitle: function () {
            this.IsShowTitle = true;
        },
        HideTitle: function () {
            this.IsShowTitle = false;
        },
        ChangeApp1Title: function () {
            myApplicatin.title = 'changed by app 2';
        }
    },
});

app3 = new Vue({
    el: '',
    data: {
    },
});