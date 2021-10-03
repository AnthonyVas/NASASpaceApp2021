$(document).ready(function () {
    $('#SV-SS').click(function (e) {
        e.preventDefault();
        loadData('SV-SS');
        
    });
    $('#SV-SM').click(function (e) {
        e.preventDefault();
        loadData('SV-SM');
        
    });
    $('#SV-UN').click(function (e) {
        e.preventDefault();
        loadData('SV-SM');
        
    });
    $('#SV-UN').hover(function (e) {
        e.preventDefault();
        alert("america");
        
    });
});

function loadData(id){
    switch (id){
        case 'SV-SS':
            $('#texthome').text("Hola San Salvador");
        break;
        case 'SV-SM':
            $('#texthome').text("Hola San Miguel");
        break;
        case 'SV-UN':
            $('#texthome').text("Hola La Union");
        break;
        default:
            alert("Sorry we got internal troubles.")
    }
}

/*FOR THE TOOLTIP */
$description = $(".description");

  $('.land').hover(function() {
    
    $(this).attr("class", "enabled heyo");
    $description.addClass('active');
    $description.html($(this).attr('id'));
  }, function() {
    $description.removeClass('active');
  });

$(document).on('mousemove', function(e){
  
  $description.css({
    left:  e.pageX,
    top:   e.pageY - 70
  });
  
});

/*/FOR THE TOOLTIP */