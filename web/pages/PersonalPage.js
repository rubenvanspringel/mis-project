Pages.PersonalPage = {
    template: `
<div class="content-wrapper">
    Personal
</div>
`
    , data: function () {
        return {};
    }, mounted: function () {
        $(window).trigger('resize');
    }
};