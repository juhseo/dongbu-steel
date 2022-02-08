$(document).ready(function () {
    mouseMoving();
});

//마우스 무빙
function mouseMoving() {
    $('#hd_btm > span').animate({ marginTop: "40px" }, 1200, "", 
    function(){
    $(this).animate({ marginTop: "0px" }, 1200, "", 
    function () { mouseMoving(); });
    });
}