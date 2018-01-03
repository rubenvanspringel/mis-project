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
                    firstName: "Alexander", 
                    lastName: "Drijkoningen", 
                    img: "web/img/user1-128x128.jpg",
                    telephoneNumber: "089456734",
                    email: "robdebacker@gmail.com",
                    socialSecurityNumber: "1548796312457896",
                    birthDate: "12/05/1983",
                    gender: "Man",
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
                                prescriptions: "n.v.t.",
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
                        {
                            title: "Longontsteking",
                            number: 122,
                            creationDate: "01/09/2017", 
                            lastConsult: "30/09/2017",
                            lastOpenedDate: "30/09/2017",
                            lastOpenedBy: "Joris Vliegen",
                            notes: "",
                            consults: [
                            {
                                date: "01/09/2017",
                                reason: "Grieperig, veel hoesten, pijn in keel en koorts",
                                observations: "Auscultatie longen: rhonchi, Oren: ok, Temperatuur: 39°, Keel: rood",
                                diagnosis: "Longontsteking",
                                prescriptions: "Ibuprofen",
                                procedure: "Veel rust"
                            },
                            {
                                date: "14/09/2017",
                                reason: "Griep is beter, nog steeds keelpijn en hoesten",
                                observations: "Auscultatie longen: rhonchi, Oren: ok, Temperatuur: 37°, Keel: rood",
                                diagnosis: "Longontsteking, maar in mindere mate",
                                prescriptions: "Ibuprofen",
                                procedure: "Veel rust"
                            },
                            {
                                date: "30/09/2017",
                                reason: "Loopneus en hoesten, verder beter",
                                observations: "Auscultatie longen: normaal, Oren: ok, Temperatuur: 37°, Keel: ok",
                                diagnosis: "Geen ziekte",
                                prescriptions: "",
                                procedure: "Geruststelling, niets nodig"
                            }],
                            history: [
                            {   editDate: "01/09/2017", 
                                editTime: "12:05:05", 
                                editBy: "dr. Joris Vliegen",
                                changes: [
                                    {
                                        type: "Creatie",
                                        content: "Dossier aangemaakt"
                                    },
                                    {
                                        type: "Update",
                                        content: "Consultatie toegevoegd"
                                    },
                                    {
                                        type: "Update",
                                        content: "Consultatie aangepast: Diagnose"
                                    },
                                    ]
                            },
                            {   editDate: "14/09/2017", 
                                editTime: "14:55:33", 
                                editBy: "dr. Joris Vliegen",
                                changes: [
                                    {
                                        type: "Update",
                                        content: "Consultatie toegevoegd"
                                    }]
                            },
                            {   editDate: "30/09/2017", 
                                editTime: "14:55:33", 
                                editBy: "dr. Joris Vliegen",
                                changes: [
                                    {
                                        type: "Update",
                                        content: "Consultatie toegevoegd"
                                    },
                                    {
                                        type: "Update",
                                        content: "Consultatie aangepast: Voorschriften"
                                    }
                                    ]
                            }
                            ]
                            
                        }]
                    
                }, {
                    year: 2016, files: [
                        {
                            title: "Pijn Schouder",
                            number: 121,
                            creationDate: "05/05/2016", 
                            lastConsult: "21/07/2016",
                            lastOpenedDate: "23/07/2016",
                            lastOpenedBy: "Joris Vliegen",
                            notes: "",
                            consults: [
                            {
                                date: "05/05/2016",
                                reason: "Pijn in linkerschouder bij bewegen",
                                observations: "n.v.t",
                                diagnosis: "Oorzaak pijn in gewricht",
                                prescriptions: "Voltaren Emulgel",
                                procedure: "Scan laten maken van schouder"
                            },
                            {
                                date: "30/05/2016",
                                reason: "Scan van schouder",
                                observations: "n.v.t.",
                                diagnosis: "n.v.t.",
                                prescriptions: "n.v.t.",
                                procedure: "Resultaten scan consulteren bij dokter"
                            },
                            {
                                date: "15/06/2016",
                                reason: "Resultaten scan consulteren bij dokter",
                                observations: "Eén of meer gewrichtsbanden zijn uitgerekt en gekneusd, maar niet gescheurd.",
                                diagnosis: "Ontwrichting van het AC-gewricht",
                                prescriptions: "Brufen",
                                procedure: "Schouder laten rusten, niets tillen"
                            },
                            {
                                date: "21/07/2016",
                                reason: "Pijn in schouder minder, maar niet verdwenen",
                                observations: "Pijn bij beweging",
                                diagnosis: "Lichte onsteking schouderblad",
                                prescriptions: "Paracetamol",
                                procedure: "Schouder laten rusten"
                            }],
                            history: [
                            {   editDate: "05/05/2016", 
                                editTime: "12:05:05", 
                                editBy: "dr. Joris Vliegen",
                                changes: [
                                    {
                                        type: "Creatie",
                                        content: "Dossier aangemaakt"
                                    },
                                    {
                                        type: "Update",
                                        content: "Consultatie toegevoegd"
                                    },
                                    {
                                        type: "Update",
                                        content: "Consultatie aangepast: Diagnose"
                                    },
                                    ]
                            },
                            {   editDate: "30/05/2016", 
                                editTime: "14:55:33", 
                                editBy: "Radioloog Sven Morre",
                                changes: [
                                    {
                                        type: "Update",
                                        content: "Consultatie toegevoegd"
                                    }]
                            },
                            {   editDate: "15/06/2016", 
                                editTime: "10:23:40", 
                                editBy: "dr. Marleen Thoelen",
                                changes: [
                                    {
                                        type: "Update",
                                        content: "Consultatie toegevoegd"
                                    },
                                    {
                                        type: "Update",
                                        content: "Consultatie aangepast: Voorschriften"
                                    }
                                    ]
                            },
                            {   editDate: "21/07/2016", 
                                editTime: "17:55:22", 
                                editBy: "dr. Marleen Thoelen",
                                changes: [
                                    {
                                        type: "Update",
                                        content: "Consultatie toegevoegd"
                                    }
                                    ]
                            }
                            ]
                            
                        }
                        ]
                    
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
