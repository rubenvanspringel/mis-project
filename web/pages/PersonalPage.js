Pages.PersonalPage = {
    template: `
<div class="content-wrapper">
    <section class="content-header">
        <h1>
            <small>Basis informatie</small>
        </h1>
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-lg-12">
                <div class="box box-primary">
                    <div class="box-header with-border">
                        <h3 class="box-title">Identiteits informatie</h3>
                    </div>
                    <!-- /.box-header -->
                    <!-- form start -->
                    <div class="box-body">
                        <div class="form-group">
                            <label for="firstName">Voornaam</label>
                            <input type="text" class="form-control" v-model="firstName" name="firstName" placeholder="Voornaam" />
                        </div>
                        <div class="form-group">
                            <label for="lastName">Achternaam</label>
                            <input type="text" class="form-control" v-model="lastName" name="lastName" placeholder="Achternaam" />
                        </div>
                        <div class="form-group">
                            <label for="telephoneNumber">Telefoon nummer</label>
                            <input type="text" class="form-control" v-model="telephoneNumber" name="telephoneNumber" placeholder="Telefoon nummer" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" v-model="email" name="email" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <label for="socialSecurityNumber">Rijksregister nummer</label>
                            <input type="text" class="form-control" v-model="socialSecurityNumber" name="socialSecurityNumber" placeholder="Rijksregister nummer" />
                        </div>
                        <div class="form-group">
                            <label for="birthDate">Geboorte datum</label>
                            <input id="birthDatePicker" type="text" @click="" class="form-control" v-model="birthDate" name="birthDate" placeholder="Geboorte datum" />
                        </div>
                        <div class="form-group">
                            <label for="gender">Geslacht</label>
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <input value="Man" v-model="gender" type="radio">Man</input>
                                    <input value="Woman" v-model="gender" type="radio">Vrouw</input>
                                    <input value="Other" v-model="gender" type="radio">Anders</input>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="box-footer">
                        <button class="btn btn-primary" @click="save">Wijzigingen opslaan</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
`
    , data: function () {
        return {
            firstName: Authorization.me.firstName,
            lastName: Authorization.me.lastName,
            telephoneNumber: Authorization.me.telephoneNumber,
            email: Authorization.me.email,
            socialSecurityNumber: Authorization.me.socialSecurityNumber,
            birthDate: Authorization.me.birthDate,
            gender: Authorization.me.gender
        };
    },
    mounted: function () {
        $('#birthDatePicker').datepicker();
        $(window).trigger('resize');
    },
    methods: {
        save: function() {
            console.log("saved!");
        }
    }
};
