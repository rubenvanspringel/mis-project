Vue.component('circle-component', {
    template: `
<div class="box box-primary">
    <div class="box-header">
        <h1 class="box-title">Wie kan jou dosier zien?</h1> <verified-component></verified-component>
    </div>
    <div class="box-body" id="circleBoxBody">
        <svg v-bind:height="width" v-bind:width="width">
            <circle v-bind:cx="width/2" v-bind:cy="width/2" v-bind:r="(width/2)*widthFactorInnerRing" stroke="green" stroke-width="8" fill="white" />
            <circle v-for="i in persons" stroke="#CCC" v-bind:cx="xCoordinates[i]" v-bind:cy="yCoordinates[i]" v-bind:r="(width/2)*sizeFactorPhotos*widthFactorInnerRing/5" stroke-width="6" fill="black" />
        </svg>
    </div>
</div>

`,
    props: [
        "persons"
    ],
    data: function() {
        return {
            width: 0,
            widthFactorInnerRing: 0.7,
            sizeFactorPhotos: 2,
            images: [
                    "web/img/user1-128x128.jpg",
                    "web/img/user8-128x128.jpg",
                    "web/img/user7-128x128.jpg",
                    "web/img/user6-128x128.jpg",
                    "web/img/user5-128x128.jpg",
                    "web/img/user4-128x128.jpg",
                    "web/img/user3-128x128.jpg",
                ]
        };
    },
    mounted: function(){
        this.width = $("#circleBoxBody").width();
    },
    computed: {
        xCoordinates: function () {
            var xCoor = [0];

            var innerWidth = this.widthFactorInnerRing * this.width/2;

            for (var i = 0; i < this.persons; i++) {
                xCoor.push((Math.cos((Math.PI*2/this.persons)*i + Math.PI*3/2) * innerWidth + this.width/2));
            }

            console.log(xCoor);

            return xCoor;
        },
        yCoordinates: function () {
            var yCoor = [0];

            var innerWidth = this.widthFactorInnerRing * this.width/2;

            for (var i = 0; i < this.persons; i++) {
                yCoor.push(Math.sin((Math.PI*2/this.persons)*i + Math.PI*3/2) * innerWidth + this.width/2);
            }

            console.log(yCoor);

            return yCoor;
        },
    },
    methods: {

    }
});
