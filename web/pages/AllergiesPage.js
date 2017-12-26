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
                <boxie-component icon="fa-tint" title="Ttiletje" description="Hey hey! heo is het daar? nananana"></boxie-component>
            </div>
            <div class="col-lg-4">
                <boxie-component icon="fa-tint" title="Titeltje 2" description="Hey hey! heo is het daar? nananana"></boxie-component>
            </div>
            <div class="col-lg-4">
                <boxie-component icon="fa-tint" title="Titeltje 3" description="Hey hey! heo is het daar? nananana"></boxie-component>
            </div>
            <div class="col-lg-4">
                <boxie-component icon="fa-tint" title="Titeltje 4" description="Hey hey! heo is het daar? nananana"></boxie-component>
            </div>
            <div class="col-lg-4">
                <boxie-component icon="fa-tint" title="Titeltje 5" description="Hey hey! heo is het daar? nananana"></boxie-component>
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
