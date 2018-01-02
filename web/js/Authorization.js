var Authorization = {};

Authorization.isLoggedIn = false;
Authorization.me = {};
Authorization.token = "";

Authorization.login = function(email, password) {

    Authorization.isLoggedIn = true;
    if(email == "dok"){
        Authorization.me = {
            id: 1,
            lastName: "Vermassen",
            firstName: "Jeff",
            telephoneNumber: "0478456734",
            email: "jeff.vermassen@gmail.com",
            socialSecurityNumber: "2864579635846219",
            birthDate: "02/09/1976",
            gender: "Man",
            doctor: true
        };
    } else {
        Authorization.me = {
            id: 2,
            lastName: "DeBakker",
            firstName: "Rob",
            telephoneNumber: "089456734",
            email: "robdebacker@gmail.com",
            socialSecurityNumber: "1548796312457896",
            birthDate: "12/05/1983",
            gender: "Man",
            doctor: false
        };
    }
    Pages.goToPage("personal");
    $("body").addClass("skin-blue-light");
};

Authorization.logout = function() {
    Authorization.isLoggedIn = false;
    Authorization.me = {};
    Pages.goToPage("login");
    $("body").removeClass("skin-blue-light");
};
