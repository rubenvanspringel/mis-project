Vue.component('circle-component', {
    template: `
<div class="box box-primary">
    <div class="box-header">
        <h1 class="box-title">Wie kan jou dosier zien?</h1> <verified-component></verified-component>
    </div>
    <div class="box-body" id="circleBoxBody">
        <svg v-bind:height="width" v-bind:width="width">
            <defs>
                <pattern v-for="i in persons" v-bind:id="imageIds[i]" v-bind:x="xCoordinates[i] - sizeUserCircles" v-bind:y="yCoordinates[i] - sizeUserCircles" patternUnits="userSpaceOnUse" v-bind:width="sizeUserCircles*2" v-bind:height="sizeUserCircles*2">
                    <image x="0" y="0" v-bind:xlink:href="images[i]" v-bind:width="sizeUserCircles*2" v-bind:height="sizeUserCircles*2"></image>
                </pattern>
            </defs>
            <circle v-bind:cx="width/2" v-bind:cy="width/2" v-bind:r="(width/2)*widthFactorInnerRing" stroke="green" stroke-width="8" fill="white" />
            <circle v-for="i in persons" stroke="#CCC" v-bind:cx="xCoordinates[i]" v-bind:cy="yCoordinates[i]" v-bind:r="sizeUserCircles" stroke-width="6" v-bind:fill="'url(#person' + i + ')'" />
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
                    "none",
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
        sizeUserCircles: function() {
            return (this.width/2)*this.sizeFactorPhotos*this.widthFactorInnerRing/5;
        },
        xCoordinates: function () {
            var xCoor = [0];

            var innerWidth = this.widthFactorInnerRing * this.width/2;

            for (var i = 1; i <= this.persons; i++) {
                xCoor.push((Math.cos((Math.PI*2/this.persons)*(i - 1) + Math.PI*3/2) * innerWidth + this.width/2));
            }

            return xCoor;
        },
        yCoordinates: function () {
            var yCoor = [0];

            var innerWidth = this.widthFactorInnerRing * this.width/2;

            for (var i = 1; i <= this.persons; i++) {
                yCoor.push(Math.sin((Math.PI*2/this.persons)*(i - 1) + Math.PI*3/2) * innerWidth + this.width/2);
            }

            return yCoor;
        },
        imageIds: function () {
            var ids = ["none"];

            for (var i = 1; i <= this.persons; i++) {
                ids.push("person" + i);
            }

            return ids;
        },
    },
    methods: {

    }
});
