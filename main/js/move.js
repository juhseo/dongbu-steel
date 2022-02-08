$(document).ready(function(){
    $(window).on('scroll',function(){
        let scrollT = $(this).scrollTop();
        let divTop = $('.txt_top').offset().top;
        if(scrollT>divTop - 300){
            $('.txt_top').addClass('on');
        }else{
            $('.txt_top').removeClass('on');
        }
    })
})

//부모요소에 relative를 주고 움직일 대상에 absolute를 주고
// top값 조정 opacity 조정