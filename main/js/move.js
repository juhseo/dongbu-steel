//sec02 텍스트 무빙
$(document).ready(function(){
    $(window).on('scroll',function(){
        let scrollT = $(this).scrollTop();
        let divTop = $('.pos_box01').offset().top;
        if(scrollT>divTop - 980){
            $('.pos_box01').addClass('on');
        }else{
            $('.pos_box01').removeClass('on');
        }
    })
})

//부모요소에 relative를 주고 움직일 대상에 absolute를 주고
// top값 조정 opacity 조정


//sec03 텍스트 무빙
$(document).ready(function(){
    $(window).on('scroll',function(){
        let scrollT = $(this).scrollTop();
        let divTop = $('.pos_box02').offset().top;
        if(scrollT>divTop - 990){
            $('.pos_box02').addClass('on');
        }else{
            $('.pos_box02').removeClass('on');
        }
    })
})

//sec04 scale 조정
$(document).ready(function(){
    $(window).on('scroll',function(){
        let scrollT = $(this).scrollTop();
        let divTop = $('#bg').offset().top;
        if(scrollT>divTop - 900){
            $('#bg').addClass('on');
        }else{
            $('#bg').removeClass('on');
        }
    })
})

//sec05 image 모션
$(document).ready(function(){
    $(window).on('scroll',function(){
        let scrollT = $(this).scrollTop();
        let divTop = $('.sec05_bann').offset().top;
        if(scrollT>divTop - 800){
            $('.sec05_bann').addClass('on');
        }else{
            $('.sec05_bann').removeClass('on');
        }
    })
})