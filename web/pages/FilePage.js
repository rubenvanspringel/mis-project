Pages.FilePage = {
    template: `
<div class="content-wrapper" v-if="dataLoaded">
    <section class="content-header">
        <h1>Dossier - {{file.title}}</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-lg-8 col-xs-12">
                <div class="box box-primary">
                    <div class="box-body">
                        <div class="row">
                            <div class="col-lg-6 col-xs-12">
                                <div class="form-group">
                                    <label>Dossiernr.</label>
                                    <input type="text" class="form-control" v-model="file.number"/>
                                </div>
                                <div class="form-group">
                                    <label>Datum aanmaak</label>
                                    <input id="creationDatePicker" type="text" class="form-control" v-model="file.creationDate" name="creationdate" />
                                </div>
                                <div class="form-group">
                                    <label>Laatste consultatie</label>
                                    <input id="lastConsultDatePicker" type="text" class="form-control" v-model="file.lastConsult" name="lastconsult" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-xs-12">
                                <div class="form-group">
                                    <label>Laatst bekeken</label>
                                    <input id="lastOpenedDatePicker" type="text" class="form-control" v-model="file.lastOpenedDate" name="lastopeneddate" />
                                </div>
                                <div class="form-group">
                                    <label>Door</label>
                                    <input type="text" class="form-control" v-model="file.lastOpenedBy"/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-xs-12">
                                <div class="form-group">
                                    <label>Betreft</label>
                                    <input type="text" class="form-control" v-model="file.title"/>
                                </div>
                                <div class="box-header">
                                    <h3 class="box-title">Consultaties</h3>
                                </div>
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Datum</th>
                                            <th>Reden</th>
                                            <th>Observaties</th>
                                            <th>Diagnose</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="consult in file.consults">
                                            <td>{{consult.date}}</td>
                                            <td>{{consult.reason}}</td>
                                            <td>{{consult.observations}}</td>
                                            <td>{{consult.diagnosis}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-ls-12 col-xs-12">
                                <div class="form-group">
                                  <label>Notities</label>
                                  <textarea class="form-control" rows="5" placeholder="Notities ..."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-xs-12">
                <history-component v-bind:history="file.history"></history-component>
            </div>
        </div>
        
    </section>
</div>
`
    , data: function () {
        return {
            file: null,
            dataLoaded: false
        };
    }, mounted: function () {
        this.file = Pages.state.file;
        this.dataLoaded = true;
        
        setTimeout(function() {
            $('#creationDatePicker').datepicker({format: 'dd/mm/yyyy'});
            $('#lastConsultDatePicker').datepicker({format: 'dd/mm/yyyy'});
            $('#lastOpenedDatePicker').datepicker({format: 'dd/mm/yyyy'});
            $(window).trigger('resize');
        }, 100);
    }, methods:{
        
    }
};