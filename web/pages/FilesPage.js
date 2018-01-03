Pages.FilesPage = {
    template: `
<div class="content-wrapper">
    <section class="content-header">
        <h1>Dossiers</h1>
    </section>
    <section class="content">
        <div class="row">
            <files-list-component v-bind:filesPerYear="files"></files-list-component>
        </div>
    </section>
</div>
`
    , data: function () {
        return {
            files: Authorization.me.files
        };
    }, mounted: function () {
        $(window).trigger('resize');
    }, methods:{
        toggleFiles: function(year){
            $("[data-year='" + year + "']").toggle();
        }
    }
};