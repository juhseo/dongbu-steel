//01. sec01 title 모션
$(document).ready(function(){
    $(window).on('scroll',function(){
        let scrollT=$(this).scrollTop();
        let divTop=$('#prod_bg>h3').offset().top;
        if(scrollT>divTop - 800){
            $('#prod_bg>h3').addClass('on');
        }else{
            $('#prod_bg>h3').removeClass('on');
        }
    })

})