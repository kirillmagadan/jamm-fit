$(document).ready(function(){
    $("#sm_slider").smSlider({
        transition : 'fader',
        duration : 500,
        autoPlay : true,
        autoArr : true,
        pagination : true,
        delay : 5000
    });

    $("#sm-slider").smSlider({
        transition : 'fader',
        duration : 500,
        autoPlay : true,
        autoArr : true,
        pagination : true,
        delay : 5000
    });

    $("#advantages_slider").smSlider({
        transition : 'fader',
        duration : 500,
        autoPlay : true,
        autoArr : true,
        pagination : true,
        delay : 5000
    });

    $(".burger").click(function(){
        $(".nav_header_wrap nav").slideToggle(300);
        return false;
    });

    $(document).ready(function() {
        $(".fancy").fancybox();
    });

});



