$(document).ready(function () {
var buttonclicked = false;
    $(document).scroll(function () {
        if($(document).scrollTop() > 0){
            $('.logo').addClass('animation-header');
            $('.logo img').addClass('animation-logo-img');
        }else{
            $('.logo').removeClass('animation-header');
            $('.logo img').removeClass('animation-logo-img');
        }
    });
    $('.dropbtn, .dropdown img').click(function(){
        $(".dropdown-content").toggle("slow");
        buttonClicked();
    });
    $('.dropdown-content a span').click(function(){
        $('.dropdown-content').hide("slow");
        buttonClicked();
    });
    
    function buttonClicked(){
        if( !buttonclicked ) {
            buttonclicked = true;
            $('.dropdown img').removeClass('rotated-reverse');
            $('.dropdown img').addClass('rotated');
        }else{
            buttonclicked = false;
            $('.dropdown img').removeClass('rotated');
            $('.dropdown img').addClass('rotated-reverse');
        }
    }
});

