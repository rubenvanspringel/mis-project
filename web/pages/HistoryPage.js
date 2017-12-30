Pages.HistoryPage = {
    template: `
<div class="content-wrapper">
    <div class="row">
        <div class="col-xs-12 col-lg-12">
            <ul class="timeline">
                <template v-for="edit in history">
                    <li class="time-label">
                        <span class="bg-red">
                            {{edit.editDate}}
                        </span>
                    </li>
                    <li>
                        <i class="fa fa-envelope bg-blue"></i>
                        <div class="timeline-item">
                            <span class="time"><i class="fa fa-clock-o"></i>{{edit.editTime}}</span>
                
                            <h3 class="timeline-header"><a href="#">{{edit.editBy}}</a></h3>
                
                            <div class="timeline-body">
                                <p v-for="change in edit.changes">
                                    {{change.type}}: {{change.content}}
                                </p>
                            </div>
                        </div>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</div>
`
    , data: function () {
        return {
            history: null
        };
    }, mounted: function () {
        this.history = Pages.state.history;
        
        $(window).trigger('resize');
    }
};