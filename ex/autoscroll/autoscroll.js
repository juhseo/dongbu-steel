$(document).ready(function(){
    //section위에서 마우스 휠을 움직였을때 body의 scrollTop을 이동시켜서
    // 다음 또는 이전 section의 위치로 scroll이 되도록 animate를 구현
    $("section").on("mousewheel", function(event,delta){
        if(delta>0) {
            //이전 section의 위치로 scroll
            let prev = $(this).prev().offset().top;
            //ㄴ> 나 이전의 것을 담아줌
            $("html,body").animate({scrollTop:prev},800);
        }else if(delta<0){
            //다음 section 위치로 scroll
            let next = $(this).next().offset().top;
            $("html,body").animate({scrollTop:next},800);
        }
    });
});

// $(document).ready(function(){
//     $('section').on('mousewheel',function(e,delta){
//         if(delta>0){
//             if($(this).index()!=0){
//                 let prevOffy = $(this).prev().offset().top;
//                 $('html,body').stop().animate({scrollTop:prevOffy},500,'easeOutBounce');
//             }
//         }else{
//             if($(this).index()!=3){
//                 let nextOffy = $(this).next().offset().top;
//                 $('html,body').stop().animate({scrollTop:nextOffy},500,'easeOutBounce')
//             }
//         }
//     })
// })