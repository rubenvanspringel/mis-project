Vue.component('history-component', {
    template: `
<div class="box box-primary">
    <div class="box-header">
        <h1 class="box-title">Geschiedenis</h1> <verified-component></verified-component>
    </div>
    <div class="box-body">
        <ul class="timeline">
            <template v-for="edit in historyForHistoryComponent">
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
                            <p v-for="change in edit.changes">
                                {{change.type}}: {{change.content}}
                            </p>
                        </div>
                    </div>
                </li>
            </template>
        </ul>
    </div>
    <div class="box-footer">
        <button class="btn btn-primary btn-flat" v-on:click="goToHistory">Meer</button>
    </div>
</div>
`,
    props: [
        "history"
    ],
    data: function() {
        return {
            historyForHistoryComponent: null
        };
    },
    mounted: function(){
        this.historyForHistoryComponent = this.history.slice(0,3);
    },
    methods: {
        goToHistory: function(){
            Pages.goToPage("history", {history: this.history});
        }
    }
});
