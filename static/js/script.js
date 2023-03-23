$(function(){
    $('#projects').hide();
    $('#links').hide();
    $('#about-me').show();

    $('#a-about-me').click(function(e){
        e.preventDefault();
        if($('#about-me').hasClass('active')){
            return;
        }
        
        $('#projects').removeClass('active');
        $('#links').removeClass('active');
        $('#about-me').addClass('active');

        $('#projects').hide();
        $('#links').hide();
        $('#about-me').show(400);
    })

    $('#a-projects').click(function(e){
        e.preventDefault();
        if($('#projects').hasClass('active')){
            return;
        }
        
        $('#about-me').removeClass('active');
        $('#links').removeClass('active');
        $('#projects').addClass('active');

        $('#about-me').hide();
        $('#links').hide();
        $('#projects').show(400);
    })

    $('#a-links').click(function(e){
        e.preventDefault();
        if($('#links').hasClass('active')){
            return;
        }
        
        $('#projects').removeClass('active');
        $('#about-me').removeClass('active');
        $('#links').addClass('active');

        $('#projects').hide();
        $('#about-me').hide();
        $('#links').show(400);
    })
});