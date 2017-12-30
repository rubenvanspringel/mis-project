Pages.ConsultationPage = {
    template: `
<div class="content-wrapper">
    <section class="content">
        <div class="row">
            <div class="col-lg-12 col-xs-12">
                <div class="box box-primary">
                    <div class="box-header">
                        <h3 class="box-title">
                            Consultatie
                        </h3>
                    </div>
                    <div class="box-body">
                        <div class="row">
                            <div class="col-lg-12 col-xs-12">
                                <div class="form-group">
                                    <label>Reden</label>
                                    <input type="text" class="form-control" v-model="consult.reason"/>
                                </div>
                                <div class="form-group">
                                    <label>Observatie</label>
                                    <input type="text" class="form-control" v-model="consult.observation"/>
                                </div>
                                <div class="form-group">
                                    <label>Diagnose</label>
                                    <input type="text" class="form-control" v-model="consult.diagnosis"/>
                                </div>
                                <div class="form-group">
                                    <label>Voorschriften</label>
                                    <input type="text" class="form-control" v-model="consult.prescriptions"/>
                                </div>
                                <div class="form-group">
                                    <label>Procedure</label>
                                    <input type="text" class="form-control" v-model="consult.procedure"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-footer">
                        <button class="btn btn-primary btn-flat" @click="cancel">Annuleer</button>
                        <button class="btn btn-primary btn-flat">Toevoegen</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
`
    , data: function () {
        return {
            consult: {
                reason: null,
                observation: null,
                diagnosis: null,
                prescriptions: null,
                procedure: null
            }
        };
    }, mounted: function () {
        $(window).trigger('resize');
    },
    methods: {
        cancel: function(){
            Pages.goBack();
        }
    }
};