Vue.component('sidebar-component', {
    template: `
<aside class="main-sidebar">
    <section class="sidebar">
        <!-- Sidebar Menu -->
        <ul class="sidebar-menu" data-widget="tree">
            <li class="header">MENU</li>
            <li id="PersonalListItem" class="treeview active" v-on:click="goToPersonal">
                <a href="javascript:void(0)"><i class="fa fa-user-circle-o"></i>
                    <span>Persoonlijk</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                    <li id="BasisListItem" v-on:click.stop="goToPersonal"><a href="javascript:void(0)"><i class="fa fa-user "></i> <span>Basis gegevens</span></a></li>
                    <li id="AllergiesListItem" v-on:click.stop="goToAllergies"><a href="javascript:void(0)"><i class="fa fa-tint"></i> <span>Allergieën</span></a></li>
                    <li id="InentingenListItem" v-on:click.stop="goToInentingen"><a href="javascript:void(0)"><i class="fa fa-eyedropper"></i> <span>Inentingen</span></a></li>
                </ul>
            </li>

            <li id="FilesListItem" v-on:click="goToFiles"><a href="javascript:void(0)"><i class="fa fa-tachometer"></i> <span>Dossiers</span></a></li>
            <li id="LogoutListItem" v-on:click="logout"><a href="javascript:void(0)"><i class="fa fa-tachometer"></i> <span>Uitloggen</span></a></li>
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
            Pages.goToPage("allergies");
        },
        goToInentingen: function(){
            Pages.goToPage("inentingen");
        },
        goToFiles: function(){
            $('li').removeClass('active');
            $('#FilesListItem').addClass('active');
            Pages.goToPage("files");
        },
        logout: function(){

        }
    }
});
