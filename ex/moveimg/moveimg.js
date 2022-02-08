//클릭시 이미지 나오게 하기 
$(document).ready(function(){
    // $(".topbtn").on("click",function(){
    //     $("#topbn").slideToggle(800);
    // })
    // move();
    // //animate
    // function move(){
    //     $(".imgmove01").animate({
    //         "opacity":"1"
    //     },600);
    //     $(".imgmove02").delay(600).animate({
    //         "opacity":"1"
    //     },600);
    //     $(".imgmove03").delay(1200).animate({
    //         "opacity":"1"
    //     },600);
    //     $(".imgmove04").delay(1800).animate({
    //         "opacity":"1"
    //     },600);
    //     $(".imgmove05").delay(2400).animate({
    //         "opacity":"1"
    //     },600);
    //     $(".imgmove06").delay(3000).animate({
    //         "opacity":"1"
    //     },600);
    // }
    $(window).on("scroll",function(){
        let sct = $(this).scrollTop();
        let divt = $(".imgmove01").offset().top;
        //img01이 scrollTop에서 얼마나 떨어져있는지 확인하기.
        if(sct>divt - 300){
            //700쯤 왔을때 보이게 세팅
            $(".imgmove").addClass("on");
        }else {
            $(".imgmove").removeClass("on");
        }
    })
})