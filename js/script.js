$(document).ready(function () {

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
            url: ' https://elsalvador_vasquez:6GQbBrpOs2Pa7@api.meteomatics.com/2020-10-03T00:00:00Z--2021-10-06T00:00:00Z:PT24H/t_2m_10y_mean:C/13.749224681187735,-89.21921764650615/html',
            type: 'GET',
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
            $('#nameMunicipio').text($('#'+id).attr('title'));
            break;
        case 'SV-SM':
            $('#texthome').text("Hola San Miguel");
            $('#nameMunicipio').text($('#'+id).attr('title'));
            break;
        case 'SV-UN':
            $('#texthome').text("Hola La Union");
            $('#nameMunicipio').text($('#'+id).attr('title'));
            break;
        default:
            alert("Sorry we got internal troubles.")
    }
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