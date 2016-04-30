(function () {
    $("input[type=radio][name=optionsRadios]").on("change", function () {
        switch ($(this).val()) {
            case 'option1':
                $("#NextPointBtn").hide();
                $("#PointImg").hide();
                $("#NextPointText").show();
                break;
            case 'option2':
                $("#NextPointText").hide();
                $("#NextPointBtn").show();
                break;
        }
    });
    $("#Upload").on("click", function () {
        var img = $("#PointImg");
        img.attr("src", "https://d-nm.ppstatic.pl/k/r/21/11/56307d97da126_o.jpg");
        img.attr("width", "300px");
        img.show();
    })
})();


(function () {
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        var MapDiv = $("#MapDiv");
        if (MapDiv.height() + top < $("#AddPointForm").height())
            $("#MapDiv").stop().animate({ "marginTop": ($(window).scrollTop()) + "px" }, "slow");
        
    });
    var map = new GMaps({
        div: '#map',
        lat: 52.408333,
        lng: 16.934167,
        width: '100%',
        height: '600px',
        zoom: 12,
        click: function (event) {
            var LatInput = $("#Lat");
            var LongInput = $("#Long");
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