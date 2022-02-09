$(document).ready(function(){
    $(window).on('scroll',function(){
        let scrollT = $(this).scrollTop();
        if(scrollT==0){
            $('#movetit').addClass('on');
        }else{
            $('#movetit').removeClass('on');
        }
    })
})