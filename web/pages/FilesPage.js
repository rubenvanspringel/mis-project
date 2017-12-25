Pages.FilesPage = {
    template: `
<div class="content-wrapper">
    <section class="content-header">
        <h1>Dossiers</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-lg-12 col-xs-12">
                <div class="box box-primary clickable" v-on:click="goToFile">
                    <div class="box-header">
                        <h3 class="box-title">Griep</h3>
                    </div>
                </div>
                
                <div class="box box-primary clickable">
                    <div class="box-header">
                        <h3 class="box-title">Longontsteking</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
`
    , data: function () {
        return {};
    }, mounted: function () {
        $(window).trigger('resize');
    }, methods:{
        goToFile: function(){
            Pages.goToPage("file");
        }
    }
};