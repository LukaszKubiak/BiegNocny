(function () {
    $("input[type=radio][name=AddoptionsRadios]").on("change", function () {
        switch ($(this).val()) {
            case 'option1':
                $("#AddNextPointBtn").hide();
                $("#AddPointImg").hide();
                $("#AddText").show();
                break;
            case 'option2':
                $("#AddText").hide();
                $("#AddNextPointBtn").show();
                break;
        }
    });
    $("#AddUpload").on("click", function () {
        var img = $("#AddPointImg");
        img.attr("src", "https://d-nm.ppstatic.pl/k/r/21/11/56307d97da126_o.jpg");
        img.attr("width", "300px");
        img.show();
    })
})();

(function () {
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        var MapDiv = $("#AddMapDiv");
        if ($(window).width() > 992)
           if (MapDiv.height() + top < $("#AddForm").height())
            $("#AddMapDiv").stop().animate({ "marginTop": ($(window).scrollTop()) + "px" }, "slow");

    });

    var map = new GMaps({
        div: '#AddMap',
        lat: 52.408333,
        lng: 16.934167,
        width: '100%',
        height: '500px',
        zoom: 12,
        click: function (event) {
            var LatInput = $("#AddLat");
            var LongInput = $("#AddLong");
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