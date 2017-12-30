Vue.component('patient-listitem-component', {
    template: `
<li class="clickable" v-on:click="goToPatient">
  <img :src="patient.img" alt="User Image">
  <a class="users-list-name" href="#">{{patient.firstname + " " + patient.lastname}}</a>
  <!-- <span class="users-list-date">Today</span> -->
</li>
`,
    props:["patient"],
    data: function(){
        return {
            
        };
    },
    mounted: function(){

    },
    methods: {
        goToPatient: function(){
            Pages.goToPage("patient", {patient: this.patient});
        }
    }
});