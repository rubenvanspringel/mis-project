Vue.component('menu-component', {
    template: `
<header class="main-header">
    <a href="javascript:void(0)" class="logo">
        <span class="logo-lg"><b>HL7</b>Blockchain</span>
    </a>

    <nav class="navbar navbar-static-top" role="navigation">
        <a href="javascript:void(0);" class="sidebar-toggle" data-toggle="push-menu" role="button">
            <span class="sr-only">Toggle navigation</span>
        </a>
        <!--<div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
                <li class="dropdown notifications-menu">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <i class="fa fa-bell-o"></i>
                        <span class="label label-warning">5</span>
                    </a>
                    <ul class="dropdown-menu">
                        <li class="header">Je hebt notificaties</li>
                        <li>
                            <ul class="menu">
                                <li>
                                    <a href="#">
                                        <i class="fa fa-users text-aqua"></i> 5 nieuwe aanpassingen
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="footer"><a href="#">Bekijk alles</a></li>
                    </ul>
                </li>
            </ul>
        </div>-->
    </nav>
</header>
`,
    data: function(){
        return {};
    },
    mounted: function(){

    }
});