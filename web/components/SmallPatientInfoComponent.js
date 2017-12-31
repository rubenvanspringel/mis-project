Vue.component('small-patient-info-component', {
    template: `
<div class="col-lg-12 col-xs-12">
    <div class="media">
        <div class="media-left">
            <a>
                <img :src="patient.img" alt="Patient foto" class="media-object">
            </a>
        </div>
        <div class="media-body">
            <div class="clearfix">
                <h4 style="margin-top: 0">{{patient.lastName + " " + patient.firstName}}</h4>
                <p>{{patient.birthDate}} - {{patient.gender}}</p>
                <p>{{patient.address}}</p>
                <p>{{patient.socialSecurityNumber}}</p>
                <p style="margin-bottom: 0">
                    <i class="fa fa-address-book-o margin-r5"></i> {{fileCount}} dossiers
                </p>
            </div>
        </div>
    </div>
</div>
`,
    props:["patient"],
    data: function(){
        return {
            fileCount: 0
        };
    },
    mounted: function(){
        for(let i = 0; i < this.patient.files.length; i++){
            for(let j = 0; j < this.patient.files[i].files.length; j++){
                this.fileCount += 1;
            }
        }
    },
    methods: {
        goToPatient: function(){
            Pages.goToPage("patient");
        }
    }
});
