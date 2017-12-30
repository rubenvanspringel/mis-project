Vue.component('files-list-component', {
    template: `
<div>
    <div class="col-lg-12 col-xs-12" v-for="group in filesPerYear">
        <div class="box box-success clickable" v-on:click="toggleFiles(group.year)">
            <div class="box-header">
                <h3 class="box-title">{{group.year}}</h3>
            </div>
        </div>
        <div :data-year="group.year">
            <file-listitem-component v-for="file in group.files" v-bind:file="file"></file-listitem-component>
        </div>
    </div>
</div>
`,
    props:["filesPerYear"],
    data: function(){
        return {
            
        };
    },
    mounted: function(){

    },
    methods: {
        toggleFiles: function(year){
            $("[data-year='" + year + "']").toggle();
        }
    }
});