Pages.AllergiesPage = {
    template: `
<div class="content-wrapper">
    <section class="content-header">
        <h1>
            <small>Allergieën</small>
        </h1>
    </section>

    <section class="content">
        <div class="row">
            <div class="col-lg-4">
                <boxie-component icon="fa-tint" title="Pollen" description="Geconstateerd op: 12/12/2012"></boxie-component>
            </div>
            <div class="col-lg-4">
                <boxie-component icon="fa-tint" title="Huismijt" description="Geconstateerd op: 03/03/2008"></boxie-component>
            </div>
            <div class="col-lg-4">
                <boxie-component icon="fa-tint" title="Noten" description="Geconstateerd op: 09/12/2001"></boxie-component>
            </div>
            <div class="col-lg-4">
                <boxie-component icon="fa-tint" title="Appels" description="Geconstateerd op: 17/06/2009"></boxie-component>
            </div>
            <div class="col-lg-4">
                <boxie-component icon="fa-tint" title="Gluten" description="Geconstateerd op: 29/07/2016"></boxie-component>
            </div>
        </div>
    </section>
</div>
`
    , data: function () {
        return {};
    }, mounted: function () {
        $(window).trigger('resize');
    }
};
