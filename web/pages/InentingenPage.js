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
                <boxie-component icon="fa-eyedropper" title="Ttiletje" description="Hey hey! heo is het daar? nananana"></boxie-component>
            </div>
            <div class="col-lg-4">
                <boxie-component icon="fa-eyedropper" title="Titeltje 2" description="Hey hey! heo is het daar? nananana"></boxie-component>
            </div>
            <div class="col-lg-4">
                <boxie-component icon="fa-eyedropper" title="Titeltje 3" description="Hey hey! heo is het daar? nananana"></boxie-component>
            </div>
            <div class="col-lg-4">
                <boxie-component icon="fa-eyedropper" title="Titeltje 4" description="Hey hey! heo is het daar? nananana"></boxie-component>
            </div>
            <div class="col-lg-4">
                <boxie-component icon="fa-eyedropper" title="Titeltje 5" description="Hey hey! heo is het daar? nananana"></boxie-component>
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
