const app = new VueElement({
    el: '#app',
    data: {
        errors: [],
        emailInput: null,
        passwordInput: null
    },
    methods:{
        validateForm: function (e) {
            if (this.emailInput && this.passwordInput) {
            return true;
            }
            this.errors = [];
            if (!this.emailInput) {
            this.errors.push('Email requis.');
            }
            if(!this.passwordInput) {
            this.errors.push('Password requis.')
            }
            e.preventDefault();
        }
    }
})