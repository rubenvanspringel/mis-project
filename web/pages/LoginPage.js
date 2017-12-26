Pages.LoginPage = {
    template: `
    <div class="container">
        <div class="login-box">
             <div class="login-logo">
                <b>HL7</b>Blockhain
             </div>
             <div class="login-box-body">
                <p class="login-box-msg">Login in om je sessie te starten</p>
                <div class="form-group">
                    <input class="form-control" placeholder="E-mail" name="email" type="email" v-model="email" autofocus v-on:keyup.enter="keyHandler">
                </div>
                <div class="form-group">
                    <input class="form-control" placeholder="Password" name="password" type="password" v-model="password" v-on:keyup.enter="keyHandler">
                </div>
                <div class="row">
                    <div class="col-xs-12">
                      <button v-on:click="login" class="btn btn-primary btn-block btn-flat">Sign In</button>
                    </div>
                </div>
             </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-md-offset-4 text-center">
                <p>HL7Blockchain</p>
                <p>Made by Tom & Ruben</p>
            </div>
        </div>
    </div>
    `,data: function() {
        return {
            email: null,
            password: null,
        }
    },
    mounted: function() {
    },
    methods: {
        login: function(){
            Authorization.login(this.email, this.password);
        },
        keyHandler: function(e){
            this.login();
        }
    }
};
