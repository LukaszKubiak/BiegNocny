(function () {
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        var MapDiv = $("#MapDiv");
        if ($(window).width() > 992)
            if (MapDiv.height() + top < $("#MapForm").height())
                $("#MapDiv").stop().animate({ "marginTop": ($(window).scrollTop()) + "px" }, "slow");

    });

    var map = new GMaps({
        div: '#Map',
        lat: 52.408333,
        lng: 16.934167,
        width: '100%',
        height: '500px',
        zoom: 12,
        zoomControl: true,
        zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl: false
    });
})();

(function () {
    $('#MapLine').on("change", function () {
        $('#MapUserSelect').show();
    })
    $('#MapUserSelect').on("change", function () {
        $('#MapTable').show();
    })
})();