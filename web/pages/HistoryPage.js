Pages.HistoryPage = {
    template: `
<div class="content-wrapper">
    <div class="row">
        <div class="col-xs-12 col-lg-12">
            <ul class="timeline">

                <li class="time-label">
                    <span class="bg-red">
                        10 Feb. 2014
                    </span>
                </li>
            
                <li>
                    <i class="fa fa-envelope bg-blue"></i>
                    <div class="timeline-item">
                        <span class="time"><i class="fa fa-clock-o"></i> 12:05</span>
            
                        <h3 class="timeline-header"><a href="#">Dokter 1</a> ...</h3>
            
                        <div class="timeline-body">
                            ...
                            bla bla aanpassing
                        </div>
            
                        <div class="timeline-footer">
                            <a class="btn btn-primary btn-xs">...</a>
                        </div>
                    </div>
                </li>
                
                <li class="time-label">
                    <span class="bg-red">
                        10 Feb. 2014
                    </span>
                </li>
            
                <li>
                    <i class="fa fa-envelope bg-blue"></i>
                    <div class="timeline-item">
                        <span class="time"><i class="fa fa-clock-o"></i> 17:05</span>
            
                        <h3 class="timeline-header"><a href="#">Dokter 2</a> ...</h3>
            
                        <div class="timeline-body">
                            ...
                            bla bla aanpassing
                        </div>
            
                        <div class="timeline-footer">
                            <a class="btn btn-primary btn-xs">...</a>
                        </div>
                    </div>
                </li>
        
            </ul>
        </div>
    </div>
</div>
`
    , data: function () {
        return {};
    }, mounted: function () {
        $(window).trigger('resize');
    }
};