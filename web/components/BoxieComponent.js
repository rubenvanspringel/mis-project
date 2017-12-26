Vue.component('boxie-component', {
    template: `
    <div class="box box-primary">

        <div class="box-header with-border">
            <i class="fa" :class="icon"></i>
            <h3 class="box-title">{{title}}</h3>
        </div>

        <div class="box-body">
            {{description}}
        </div>
    </div>
`,
    props: [
        "title",
        "icon",
        "description"
    ],
    data: function() {
        return {

        };
    },
    mounted: function(){

    },
    methods: {

    }
});
