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
                    firstName: "Alexander", lastName: "Drijkoningen", img: "web/img/user1-128x128.jpg",
                    files: [
                {
                    year: 2017, files: [
                        {
                            title: "Griep",
                            number: 123,
                            creationDate: "21/12/2017",
                            lastConsult: "23/12/2017",
                            lastOpenedDate: "23/12/2017",
                            lastOpenedBy: "Joris Vliegen",
                            notes: "",
                            consults: [
                            {
                                date: "21/12/2017",
                                reason: "Hoge koorts sinds slapengaan",
                                observations: "Auscultatie longen: rhonchi, Oren: ok, Temperatuur: 39°, Keel: rood",
                                diagnosis: "Griep",
                                prescriptions: "Ibuprofen",
                                procedure: "Veel rust"
                            },
                            {
                                date: "23/12/2017",
                                reason: "Loopneus en hoesten, verder beter",
                                observations: "Auscultatie longen: normaal, Oren: ok, Temperatuur: 37°, Keel: ok",
                                diagnosis: "Geen ziekte",
                                prescriptions: "",
                                procedure: "Geruststelling, niets nodig"
                            }],
                            history: [
                            {   editDate: "21/12/2017",
                                editTime: "12:05:05",
                                editBy: "dr. Joris Vliegen",
                                changes: [
                                    {
                                        type: "Creatie",
                                        content: "Dossier aangemaakt"
                                    }]
                            },
                            {   editDate: "23/12/2017",
                                editTime: "14:55:33",
                                editBy: "dr. Joris Vliegen",
                                changes: [
                                    {
                                        type: "Update",
                                        content: "Consultatie toegevoegd"
                                    }]
                            }
                            ]
                        },
                        {title: "Longontsteking", creationDate: "21/12/2017", lastConsult: "21/12/2017"}]

                }, {
                    year: 2016, files: [{title: "Pijn Schouder", creationDate: "21/12/2017", lastConsult: "21/12/2017"}]

                }]
                },
                {
                    firstName: "Ben", lastName: "Segers", img: "web/img/user8-128x128.jpg",
                    files: [{year: 2017, files: [{title: "Griep"}, {title: "Longontsteking"}]}, {year: 2016, files: [{title: "Pijn Schouder"}]}]
                },
                {
                    firstName: "Laura", lastName: "Dussart", img: "web/img/user7-128x128.jpg",
                    files: [{year: 2017, files: [{title: "Griep"}, {title: "Longontsteking"}]}, {year: 2016, files: [{title: "Pijn Schouder"}]}]
                },
                {
                    firstName: "Rob", lastName: "Vanoudenhove", img: "web/img/user6-128x128.jpg",
                    files: [{year: 2017, files: [{title: "Griep"}, {title: "Longontsteking"}]}, {year: 2016, files: [{title: "Pijn Schouder"}]}]
                },
                {
                    firstName: "Veerle", lastName: "Baetens", img: "web/img/user5-128x128.jpg",
                    files: [{year: 2017, files: [{title: "Griep"}, {title: "Longontsteking"}]}, {year: 2016, files: [{title: "Pijn Schouder"}]}]
                },
                {
                    firstName: "Nathalie", lastName: "Meskens", img: "web/img/user4-128x128.jpg",
                    files: [{year: 2017, files: [{title: "Griep"}, {title: "Longontsteking"}]}, {year: 2016, files: [{title: "Pijn Schouder"}]}]
                },
                {
                    firstName: "Eva", lastName: "Spies", img: "web/img/user3-128x128.jpg",
                    files: [{year: 2017, files: [{title: "Griep"}, {title: "Longontsteking"}]}, {year: 2016, files: [{title: "Pijn Schouder"}]}]
                },
                ]
        };
    }, mounted: function () {
        $(window).trigger('resize');
    }
};
