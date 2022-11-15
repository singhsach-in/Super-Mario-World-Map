function initMap() {
    map = new google.maps.Map(
        document.getElementById("map"),
        {
            mapId: "c97980c344b1c506",
            center: { lat: 23.233821549408592, lng: 77.43295951613376 },
            zoom: 16,
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false

        }
    );

    const markers = [
        [
            "Mushroom House",
            23.233654568760034,
            77.42975446225331,
            "PNG/Retro Mushroom - Super (3).PNG",
            38,
            31

        ],
        [
            "Square",
            23.23123606247348,
            77.4326377579224,
            "PNG/Question Block.png",
            38,
            31
        ],
        [
            "Coin",
            23.233480103329146,
            77.43264481590798,
            "PNG/Retro Coin.png",
            38,
            31
        ],
        [
            "Wild Flower",
            23.236860960261648, 77.43621881680511,
            "PNG/Retro Feather.png",
            38,
            31
        ],
        [
            "Boo",
            23.231125805172137,
            77.4342116872982,
            "PNG/Boo.png",
            38,
            31
        ],
        [
            "Bullet Bill",
            23.23205625828515,
            77.42290923631896,
            "PNG/Bullet Bill.png",
            38,
            31
        ],
        [
            "FlowerFire",
            23.233541499109727,
            77.42729353146474,
            "PNG/Flower - Fire.png",
            38,
            31
        ],
        [
            "Goomba",
            23.234465912807327,
            77.43207311954936,
            "PNG/Goomba.png",
            38,
            31
        ],
        [
            "Mushroom - 1UP",
            23.23596659161123, 77.44063270829287,
            "PNG/Mushroom - 1UP.png",
            38,
            31
        ],
        [
            "Mushroom - Bee",
            23.23582099614734, 77.42370147325266,
            "PNG/Mushroom - Bee.png",
            38,
            31
        ],
        [
            "Mushroom - Life",
            23.23777612202468, 77.42757211657435,
            "PNG/Mushroom - Life.png",
            38,
            31
        ],
        [
            "Mushroom - Boo",
            23.238753674197923, 77.43472488431861,
            "PNG/Mushroom - Boo.png",
            38,
            31
        ],
        [
            "Mushroom - Spring",
            23.238753674197923, 77.43472488431861,
            "PNG/Mushroom - Spring.png",
            38,
            31
        ],
        [
            "Mushroom - Mega",
            23.232701055115182, 77.43947830609962,
            "PNG/Mushroom - Mega.png",
            38,
            31
        ],
        [
            "Mushroom - Mini",
            23.23045465245833, 77.44020263701042,
            "PNG/Mushroom - Mini.png",
            38,
            31
        ],
        [
            "Mushroom - Super",
            23.231078656988636, 77.44022527235138,
            "PNG/Mushroom - Mini.Super",
            38,
            31
        ],
        [
            "Paper Bowser",
            23.237339341092078, 77.4300167334211,
            "PNG/Paper Bowser.Super",
            38,
            31
        ],
        [
            "Paper Lakitu",
            23.228374616333443, 77.43105795901364,
            "PNG/Paper Lakitu.png",
            38,
            31
        ],
        [
            "Paper Mario",
            23.230080248383384, 77.42850016548483,
            "PNG/Paper Mario.png",
            38,
            31
        ],
        [
            "Chain Chomp",
            23.2337618432833, 77.43626408749192,
            "PNG/Chain Chomp.png",
            38,
            31
        ],




    ]
    for (var i = 0; i < markers.length; i++) {
        const currMarker = markers[i];

        const marker = new google.maps.Marker(
            {
                position: { lat: currMarker[1], lng: currMarker[2] },
                map,
                title: currMarker[0],
                icon: {
                    url: currMarker[3],
                    scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
                },
                animation: google.maps.Animation.DROP
            }
        );


        const infowindow = new google.maps.InfoWindow({
            content: currMarker[0],
        });

        marker.addListener("click", () => {
            infowindow.open({
                anchor: marker,
                map,
            });
        });
    }
}



