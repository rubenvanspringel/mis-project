Pages.InentingenPage = {
    template: `
<div class="content-wrapper">
    <section class="content-header">
        <h1>
            <small>Inentingen</small>
        </h1>
    </section>

    <section class="content">
        <div class="row">
            <div class="col-lg-4">
                <boxie-component icon="fa-eyedropper" title="Mazelen" description="Laatste inenting: 09/03/2004"></boxie-component>
            </div>
            <div class="col-lg-4">
                <boxie-component icon="fa-eyedropper" title="Polio" description="Laatste inenting: 03/02/1999"></boxie-component>
            </div>
            <div class="col-lg-4">
                <boxie-component icon="fa-eyedropper" title="Tetanus" description="Laatste inenting: 10/10/2007"></boxie-component>
            </div>
            <div class="col-lg-4">
                <boxie-component icon="fa-eyedropper" title="Kinkhoest" description="Laatste inenting: 06/04/1994"></boxie-component>
            </div>
            <div class="col-lg-4">
                <boxie-component icon="fa-eyedropper" title="Hepatitus B" description="Laatste inenting: 12/06/2002"></boxie-component>
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
