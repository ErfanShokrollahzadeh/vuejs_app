let app1
let app2
const data = {title: 'Hello Vue!'}


const component = {
    data: function () {
        return data;
    },
    methods: {
        changetitle: function () {
            this.title = 'change title';
        }
    },
    template: '<div> <p>this is title: {{title}}</p> <br> <button v-on:click="changetitle">change title</button> </div>'
};

app1 = new Vue({
    el: '#app1',
    components:{
        'my-component': component
    }
});

app2 = new Vue({
    el: '#app2',
});