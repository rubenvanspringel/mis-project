Vue.component('sidebar-component', {
    template: `
<aside class="main-sidebar">
    <section class="sidebar">
        <!-- Sidebar Menu -->
        <ul class="sidebar-menu" data-widget="tree">
            <li class="header">MENU</li>
            <li id="PersonalListItem" class="active" v-on:click="goToPersonal"><a href="javascript:void(0)"><i class="fa fa-tachometer"></i> <span>Persoonlijk</span></a></li>
            <li id="AllergiesListItem" v-on:click="goToAllergies"><a href="javascript:void(0)"><i class="fa fa-tachometer"></i> <span>Allergieën</span></a></li>
        </ul>
    </section>
</aside>
`,
    data: function(){
        return {};
    },
    mounted: function(){

    },
    methods: {
        goToPersonal: function(){
            $('li').removeClass('active');
            $('#PersonalListItem').addClass('active');
            Pages.goToPage("personal");
        },
        goToAllergies: function(){
            $('li').removeClass('active');
            $('#AllergiesListItem').addClass('active');
            Pages.goToPage("allergies");
        }
    }
});