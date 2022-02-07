$(document).ready(function(){
    $('section').on('mousewheel', function(event,delta){
        if(delta>0) {
            let prev = $(this).prev().offset().top;
            $("html,body").animate({scrollTop:prev},800);
        }else if(delta<0){
            let next = $(this).next().offset().top;
            $("html,body").animate({scrollTop:next},800);
        }
    });
});
console.log(prev);
console.log(next);