Pages.AllergiesPage = {
    template: `
<div class="content-wrapper">
    Allergies
</div>
`
    , data: function () {
        return {};
    }, mounted: function () {
        $(window).trigger('resize');
    }
};