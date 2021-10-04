let depName = [["SV-AH", "Ahuachapan"], ["SV-CA", "Cabañas"], ["SV-CH", "Chalatenango"], ["SV-CU", "Cuscatlán"], ["SV-LI", "La Libertad"], ["SV-MO", "Morazán"], ["SV-PA", "La Paz"], ["SV-SA", "Santa Ana"], ["SV-SM", "San Miguel"], ["SV-SO", "Sonsonate"], ["SV-SS", "San Salvador"], ["SV-SV", "San Vicente"], ["SV-UN", "La Union"], ["SV-US", "Usulutan"]];
// var depNameT = ["Ahuachapan","Cabañas","Chalatenango","Cuscatlán","La Libertad","Morazán","La Paz","Santa Ana","San Miguel","Sonsonate","San Salvador", "San Vicente","La Union", "Usulutan"];
var tempSS;

$(document).ready(function () {
    setSendData();
    $('#SV-SS').click(function (e) {
        e.preventDefault();
        loadData('SV-SS');

        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather?q=San Salvador,SV&units=metric&appid=331e87080967381398c662bf2c28050c',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                // $('#texthome').text(data.name);
                // $('#txt').text(data.main.temp + "°C");
                tempSS = data.main.temp;
                $('#txt').text(tempSS + "°C");
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

    // var date = currentTimeDate.getDate();
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
    
    
});

function loadData(id) {
    switch (id) {
        case 'SV-SS':
            $('#texthome').text("Hola compatriota de San Salvador");
            $('.nameMunicipio').text($('#' + id).attr('title'));
            setSendData();
            $('#' + id).css('fill', '#000000');
            break;
        case 'SV-SM':
            $('#texthome').text("Hola compatriota de San Miguel");
            $('.nameMunicipio').text($('#' + id).attr('title'));
            setSendData();
            $('#' + id).css('fill', '#000000');
            break;
        case 'SV-UN':
            $('#texthome').text("Hola compatriota de La Union");
            $('.nameMunicipio').text($('#' + id).attr('title'));
            setSendData();
            $('#' + id).css('fill', '#000000');
            break;
        default:
            alert("Sorry we got internal troubles.")
    }
}
function setSendData() {
    var count = 0;
    depName.forEach(element => {
        // console.log(element);
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${element[1]},SV&units=metric&appid=331e87080967381398c662bf2c28050c`,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                // $('#texthome').text(data.name);
                // $('#txt').text(data.main.temp + "°C");
                setColorMap(data.main.temp, element[0], element[1]);
                // console.log(element);

            }
        });
        // alert(depName[count]);

        count++;
    });
}

function setColorMap(temp, name, nameT) {
    // console.log(name);s
    if (temp < 25) {
        $('#' + name).css('fill', 'green');

    } else if (temp > 25 && temp < 32) {
        $('#' + name).css('fill', 'orange');

    }
    else if (temp > 32) {
        $('#' + name).css('fill', 'red');
    } else {
        $('#' + name).css('fill', 'black');
    }

    // depName.forEach(element => {
    //     $('#'+element).css('fill','green');

    // });
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