var Pages = {
    state: {},
    previousPages: [],
    previousContent: [],
    maxHistory: 20
};

Pages.addHistory = function(view, state) {
    Pages.previousPages.push(view);
    Pages.previousContent.push(state);
    if (Pages.previousPages.length > Pages.maxHistory) {
        Pages.previousPages.shift();
        Pages.previousContent.shift();
    }
};

Pages.goToPage = function (pageName, state) {
    Pages.addHistory(app.currentPage, Pages.state);
    Pages.goToPageWithoutHistory(pageName, state);
};

Pages.goToPageWithoutHistory = function(pageName, state) {

    if (arguments.length == 1) {
        app.currentPage = pageName;
    } else if (arguments.length == 2) {
        app.currentPage = pageName;
        Pages.state = state;
    }
};

Pages.goBack = function() {
    if (Pages.previousPages.length > 0) {
        app.currentPage = Pages.previousPages.pop();
        Pages.state = Pages.previousContent.pop();
    }
};
