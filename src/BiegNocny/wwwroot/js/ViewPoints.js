(function () {
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        var MapDiv = $("#ViewMapDiv");
        if ($(window).width() > 992)
            if (MapDiv.height() + top < $("#ViewForm").height())
                $("#ViewMapDiv").stop().animate({ "marginTop": ($(window).scrollTop()) + "px" }, "slow");

    });

    var map = new GMaps({
        div: '#ViewMap',
        lat: 52.408333,
        lng: 16.934167,
        width: '100%',
        height: '500px',
        zoom: 12,
        click: function (event) {
            var LatInput = $("#ViewLat");
            var LongInput = $("#ViewLong");
            var lat = event.latLng.lat();
            var lng = event.latLng.lng();
            LatInput.attr("value", lat);
            LongInput.attr("value", lng);
        },
        zoomControl: true,
        zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl: false
    });
})();

(function () {
    $('#ViewLine').on("change", function () {
        $('#ViewNumberWrapper').show();
    })
    $('#ViewNumberWrapper').on("change", function () {
        $('#ViewWrapper').show();
    })
})();