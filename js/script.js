var depName = ["SV-AH", "SV-CA","SV-CH","SV-CU", "SV-LI","SV-MO","SV-PA","SV-SA","SV-SM","SV-SO","SV-SS","SV-SV","SV-UN","SV-US"];


$(document).ready(function () {

    $('#clima').click(function (e) {
        e.preventDefault();


        $.ajax({
            url: 'http://history.openweathermap.org/data/3.0/history/locations/create?lat=51.8080&lon=-0.1257&appid=331e87080967381398c662bf2c28050c',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                // $('#texthome').text(data.name);
                $('#fmap').text(data);
            }
        });

    });
    $('#SV-SS').click(function (e) {
        e.preventDefault();
        loadData('SV-SS');

        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather?q=San Salvador,SV&units=metric&appid=331e87080967381398c662bf2c28050c',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                // $('#texthome').text(data.name);
                $('#txt').text(data.main.temp + "°C");
            }
        });
        $.ajax({
            url: 'https://elsalvador_vasquez:6GQbBrpOs2Pa7@api.meteomatics.com/2021-10-03T00:00:00ZP1D:PT1H/t_2m:C,relative_humidity_2m:p/47.4245,9.3767/json',
            // url: ' https://elsalvador_vasquez:6GQbBrpOs2Pa7@api.meteomatics.com/2020-10-03T00:00:00Z--2021-10-06T00:00:00Z:PT24H/t_2m_10y_mean:C/13.749224681187735,-89.21921764650615/html_map',
            // url: ' https://api.meteomatics.com/2020-10-03T00:00:00Z--2021-10-06T00:00:00Z:PT24H/t_2m_10y_mean:C/13.749224681187735,-89.21921764650615/html',

            type: 'POST',
            dataType: 'json',
            success: function (data) {
                // $('#texthome').text(data.name);
                $('#fmap').text(data);

            }
        });

    });

    $('#SV-SM').click(function (e) {
        e.preventDefault();
        loadData('SV-SM');
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather?q=San Miguel,SV&units=metric&appid=331e87080967381398c662bf2c28050c',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                // $('#texthome').text(data.name);
                $('#txt').text(data.main.temp + "°C");

            }
        });
    });


    $('#SV-UN').click(function (e) {
        e.preventDefault();
        loadData('SV-UN');
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather?q=La Union,SV&units=metric&appid=331e87080967381398c662bf2c28050c',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                // $('#texthome').text(data.name);
                $('#txt').text(data.main.temp + "°C");

            }
        });

    });
    // $('#SV-UN').hover(function (e) {
    //     e.preventDefault();
    //     alert("america");

    // });
});

function loadData(id) {
    switch (id) {
        case 'SV-SS':
            $('#texthome').text("Hola San Salvador");
            $('.nameMunicipio').text($('#' + id).attr('title'));
            setColorMap();
            $('#'+id).css('fill','#000000');
            break;
        case 'SV-SM':
            $('#texthome').text("Hola San Miguel");
            $('.nameMunicipio').text($('#' + id).attr('title'));
            setColorMap();
            $('#'+id).css('fill','#000000');
            break;
        case 'SV-UN':
            $('#texthome').text("Hola La Union");
            $('.nameMunicipio').text($('#' + id).attr('title'));
            setColorMap();
            $('#'+id).css('fill','#000000');
            break;
        default:
            alert("Sorry we got internal troubles.")
    }
}
function setColorMap(){
    depName.forEach(element => {
        $('#'+element).css('fill','green');

    });
}
/*FOR THE TOOLTIP */
$description = $(".description");

$('.land').hover(function () {

    $(this).attr("class", "enabled heyo land");
    $description.addClass('active');
    $description.html($(this).attr('title'));
}, function () {
    $description.removeClass('active');
});

$(document).on('mousemove', function (e) {

    $description.css({
        left: e.pageX,
        top: e.pageY - 70
    });

});

/*/FOR THE TOOLTIP */