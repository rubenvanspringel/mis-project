Pages.FilesPage = {
    template: `
<div class="content-wrapper">
    <section class="content-header">
        <h1>Dossiers</h1>
    </section>
    <section class="content">
        <div class="row">
            <files-list-component v-bind:filesPerYear="filesPerYear"></files-list-component>
        </div>
    </section>
</div>
`
    , data: function () {
        return {
            filesPerYear: [
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
        };
    }, mounted: function () {
        $(window).trigger('resize');
    }, methods:{
        toggleFiles: function(year){
            $("[data-year='" + year + "']").toggle();
        }
    }
};