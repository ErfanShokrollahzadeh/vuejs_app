let myaplication

myaplication = new Vue({
    el: '#app',
    data: {
        IsShowLoginSection: true,
        IsShowRegisterSection: false,
        LoginTips: [
            'موارد مربوط به ورورد1',
            'موارد مربوط به ورورد2',
            'موارد مربوط به ورورد3',
            'موارد مربوط به ورورد4',
            'موارد مربوط به ورورد5',
        ],
        RegisterTips: [
            'موارد مربوط به ثبت نام1',
            'موارد مربوط به ثبت نام2',
            'موارد مربوط به ثبت نام3',
            'موارد مربوط به ثبت نام4',
            'موارد مربوط به ثبت نام5',
        ],
        UserName: ''
    },
    methods: {
        ShowRegisterSection: function () {
            this.IsShowLoginSection = false;
            this.IsShowRegisterSection = true;
        },
        ShowLoginSection: function () {
            this.IsShowLoginSection = true;
            this.IsShowRegisterSection = false;
        },
        CheckUserName: function () {
            console.log(this.$refs);

            const input = this.$refs.UserNameInput;

            const input2 = document.querySelector('#usernameinput'); // this line work same line 36

            if (this.UserName === '') {
                input.classList.add('error');
                input.classList.remove('success');
            }
            else{
                input.classList.remove('error');
                input.classList.add('success');
            }
        },
    },
    watch: {
        UserName: function (){
            this.CheckUserName();
        }
    },
});