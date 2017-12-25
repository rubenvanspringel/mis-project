Pages.FilePage = {
    template: `
<div class="content-wrapper">
    <section class="content-header">
        <h1>File</h1>
    </section>
    <section class="content">
        <button class="btn btn-primary btn-flat" v-on:click="goToHistory">Geschiedenis</button> 
    </section>
</div>
`
    , data: function () {
        return {};
    }, mounted: function () {
        $(window).trigger('resize');
    }, methods:{
        goToHistory: function(){
            Pages.goToPage("history");
        }
    }
};