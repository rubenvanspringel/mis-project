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
                                <div class="form-group" v-if="existingConsult">
                                    <label>Datum</label>
                                    <input id="consultDatePicker" type="text" class="form-control" v-model="consult.date"/>
                                </div>
                                <div class="form-group">
                                    <label>Reden</label>
                                    <input type="text" class="form-control" v-model="consult.reason"/>
                                </div>
                                <div class="form-group">
                                    <label>Observatie</label>
                                    <input type="text" class="form-control" v-model="consult.observations"/>
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
                        <button v-if="!existingConsult" data-toggle="modal" data-target="#nothingDeletedModal" class="btn btn-primary btn-flat">Toevoegen</button>
                        <button v-else class="btn btn-primary btn-flat" @click="editExisting">Aanpassen</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Modal -->
    <div class="modal modal-danger fade" id="nothingDeletedModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Opgelet!</h4>
          </div>
          <div class="modal-body">
            De veiligheid van een blockchain wordt gegarandeerd doordat elke aanpassing bewaart blijft en later kan opgevraagt worden. Hierdoor is het niet mogelijk om later deze informatie defenitief te verwijderen.
          </div>
          <div class="modal-footer">
                <button type="button" class="btn btn-outline  pull-left" data-dismiss="modal" @click="addNew">Opslaan</button>
                <button type="button" class="btn btn-outline" data-dismiss="modal">Sluiten</button>
          </div>
        </div>
      </div>
    </div>
</div>
`
    , data: function () {
        return {
            consult: {
                reason: null,
                observations: null,
                diagnosis: null,
                prescriptions: null,
                procedure: null
            },
            existingConsult: false
        };
    }, mounted: function () {
        if(Pages.state != undefined && Pages.state != null){
            if(Pages.state.consult != undefined && Pages.state.consult != null){
                this.existingConsult = true;
                this.consult = Pages.state.consult;
            }
        }

        setTimeout(function(){
            $("#consultDatePicker").datepicker({format: 'dd/mm/yyyy'});
        }, 100);
        $(window).trigger('resize');
    },
    methods: {
        cancel: function(){
            Pages.goBack();
        },
        addNew: function(){
            Pages.goBack();
        },
        editExisting: function(){
            Pages.goBack();
        }
    }
};
