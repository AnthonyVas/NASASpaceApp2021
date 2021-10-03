$(document).ready(function () {

    $('#SV-SS').click(function (e) {
        e.preventDefault();
      $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=San Salvador,SV&units=metric&appid=331e87080967381398c662bf2c28050c',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $('#texthome').text(data.name);
            $('#txt').text(data.main.temp + "°C");
           
        }
    });
});

    $('#SV-SM').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather?q=San Miguel,SV&units=metric&appid=331e87080967381398c662bf2c28050c',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                $('#texthome').text(data.name);
                $('#txt').text(data.main.temp + "°C");

            }
        });
    });
});