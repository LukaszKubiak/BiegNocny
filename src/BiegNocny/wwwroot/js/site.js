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