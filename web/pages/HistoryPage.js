Pages.HistoryPage = {
    template: `
<div class="content-wrapper">
    <section class="content">
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
                            <i class="fa fa-heartbeat bg-blue"></i>
                            <div class="timeline-item">
                                <span class="time"><i class="fa fa-clock-o"></i>{{edit.editTime}}</span>
                    
                                <h3 class="timeline-header"><a href="#">{{edit.editBy}}</a></h3>
                    
                                <div class="timeline-body">
                                    <div class="clearfix">
                                        <div class="pull-left">
                                            <p v-for="change in edit.changes">
                                                {{change.type}}: {{change.content}}
                                            </p>
                                        </div>
                                        <div class="pull-right">
                                            <verified-component></verified-component>
                                            <!--<i class="fa fa-lock"></i> <a href="#" data-toggle="modal" data-target="#blockchainModal"> Verified by Blockchain</a>-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-xs-12">
                <button class="btn btn-primary btn-flat" @click="goBack">Terug</button>
            <?div>
        </div>
        <div class="modal fade" id="blockchainModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        <h4 class="modal-title">Blockchain informatie</h4>
                    </div>
                    <div class="modal-body">
                        <p>Blockchain informatie ...</p>
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
`
    , data: function () {
        return {
            history: null
        };
    }, mounted: function () {
        this.history = Pages.state.history;
        
        $(window).trigger('resize');
    },
    methods: {
        openBlockchainInformation: function(){
            
        },
        goBack: function(){
            Pages.goBack();
        }
    }
};