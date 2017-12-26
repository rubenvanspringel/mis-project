Pages.FilesPage = {
    template: `
<div class="content-wrapper">
    <section class="content-header">
        <h1>Dossiers</h1>
    </section>
    <section class="content">
        <div class="row">
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
    </section>
</div>
`
    , data: function () {
        return {
            filesPerYear: [{year: 2017, files: [{name: "Griep"}, {name: "Longontsteking"}]}, {year: 2016, files: [{name: "Pijn Schouder"}]}]
        };
    }, mounted: function () {
        $(window).trigger('resize');
    }, methods:{
        toggleFiles: function(year){
            $("[data-year='" + year + "']").toggle();
        }
    }
};