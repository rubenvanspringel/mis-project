Pages.HomePage = {
    template: `
<div class="content-wrapper">
    Hello :)
</div>
`
    , data: function () {
        return {};
    }, mounted: function () {
        $(window).trigger('resize');
    }
};