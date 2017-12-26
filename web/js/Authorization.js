var Authorization = {};

Authorization.isLoggedIn = false;
Authorization.me = {};
Authorization.token = "";

Authorization.login = function(email, password) {
    
    Authorization.isLoggedIn = true;
    if(email == "dok"){
        Authorization.me = {id: 1, lastname: "Vermassen", firstname: "Jeff", doctor: true};
    } else {
        Authorization.me = {id: 1, lastname: "DeBakker", firstname: "Rob", doctor: false};
    }
    Pages.goToPage("homepage");
    $("body").addClass("skin-blue-light");
};

Authorization.logout = function() {
    Authorization.isLoggedIn = false;
    Authorization.me = {};
    Pages.goToPage("login");
    $("body").removeClass("skin-blue-light");
};
