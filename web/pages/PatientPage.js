Pages.PatientPage = {
    template: `
<div class="content-wrapper">
    <section class="content" v-if="patient != null && patient !== undefined">
        <div class="row">
            <small-patient-info-component v-bind:patient="patient"></small-patient-info-component>
        </div>
        <div class="row" style="margin-top: 15px;">
            <files-list-component v-bind:filesPerYear="patient.files"></files-list-component>
        </div>
    </section>
</div>
`
    , data: function () {
        return {
            patient: null
        };
    }, mounted: function () {
        this.patient = Pages.state.patient;
        $(window).trigger('resize');
    }
};