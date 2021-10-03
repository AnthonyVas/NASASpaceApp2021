$(document).ready(function () {
    $('#SV-SS').click(function (e) {
        e.preventDefault();
        $('#texthome').text("Hola San Salvador");
        // var t = this.getBoundingClientRect().top,
        //     l = this.getBoundingClientRect().left;
        // $tooltip.css({"top": t + "px", "left": l + "px"}).show();
    });
    $('#SV-SM').click(function (e) {
        e.preventDefault();
        $('#texthome').text("Hola San Miguel");
        // var t = this.getBoundingClientRect().top,
        //     l = this.getBoundingClientRect().left;
        // $tooltip.css({"top": t + "px", "left": l + "px"}).show();
    });
});