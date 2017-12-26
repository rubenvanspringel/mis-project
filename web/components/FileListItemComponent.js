Vue.component('file-listitem-component', {
    template: `
<div class="box box-primary clickable" v-on:click="goToFile">
    <div class="box-header">
        <h3 class="box-title">{{file.name}}</h3>
    </div>
</div>
`,
    props:["file"],
    data: function(){
        return {
            
        };
    },
    mounted: function(){

    },
    methods: {
        goToFile: function(){
            Pages.goToPage("file");
        }
    }
});