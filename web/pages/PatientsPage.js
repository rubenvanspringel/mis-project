Pages.PatientsPage = {
    template: `
<div class="content-wrapper">
    <section class="content-header">
        <h1>Patiënten</h1>
    </section>
    <section class="content">
        <div class="row">
            <div class="col">
                <ul class="users-list">
                    <patient-listitem-component v-for="patient in patients" v-bind:patient="patient"></patient-listitem-component>
                </ul>
            </div>
        </div>
    </section>
</div>
`
    , data: function () {
        return {
            patients: [
                {
                    firstname: "Alexander", lastname: "Drijkoningen", img: "web/img/user1-128x128.jpg",
                    files: [{year: 2017, files: [{name: "Griep"}, {name: "Longontsteking"}]}, {year: 2016, files: [{name: "Pijn Schouder"}]}]
                }, 
                {
                    firstname: "Ben", lastname: "Segers", img: "web/img/user8-128x128.jpg",
                    files: [{year: 2017, files: [{name: "Griep"}, {name: "Longontsteking"}]}, {year: 2016, files: [{name: "Pijn Schouder"}]}]
                }, 
                {
                    firstname: "Laura", lastname: "Dussart", img: "web/img/user7-128x128.jpg",
                    files: [{year: 2017, files: [{name: "Griep"}, {name: "Longontsteking"}]}, {year: 2016, files: [{name: "Pijn Schouder"}]}]
                },
                {
                    firstname: "Rob", lastname: "Vanoudenhove", img: "web/img/user6-128x128.jpg",
                    files: [{year: 2017, files: [{name: "Griep"}, {name: "Longontsteking"}]}, {year: 2016, files: [{name: "Pijn Schouder"}]}]
                },
                {
                    firstname: "Veerle", lastname: "Baetens", img: "web/img/user5-128x128.jpg",
                    files: [{year: 2017, files: [{name: "Griep"}, {name: "Longontsteking"}]}, {year: 2016, files: [{name: "Pijn Schouder"}]}]
                },
                {
                    firstname: "Nathalie", lastname: "Meskens", img: "web/img/user4-128x128.jpg",
                    files: [{year: 2017, files: [{name: "Griep"}, {name: "Longontsteking"}]}, {year: 2016, files: [{name: "Pijn Schouder"}]}]
                },
                {
                    firstname: "Eva", lastname: "Spies", img: "web/img/user3-128x128.jpg",
                    files: [{year: 2017, files: [{name: "Griep"}, {name: "Longontsteking"}]}, {year: 2016, files: [{name: "Pijn Schouder"}]}]
                },
                ]
        };
    }, mounted: function () {
        $(window).trigger('resize');
    }
};