Vue.component('verified-component', {
    template: `
<div class="btn-group">
    <button type="button" class="btn btn-success btn-xs" data-toggle="modal" data-target="#explainBlockchainModal"><i class="fa fa-link"></i> Verified by blockchain</button>
    <button type="button" class="btn btn-warning btn-xs" data-toggle="modal" data-target="#explainBlockchainModal">Why?</button>

    <!-- Modal -->
    <div class="modal modal-default fade" id="explainBlockchainModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Blockchain</h4>
          </div>
          <div class="modal-body">
            <img src="web/img/blockchain_info.png" alt="blockchain info" class="center-block" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
</div>
`,
    data: function() {
        return {

        };
    },
    mounted: function(){

    },
    methods: {

    }
});
