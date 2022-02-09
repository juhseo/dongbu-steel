let korVer = document.querySelector('#korver');
let engVer = document.querySelector('#engver');
let korDesc = document.querySelector('#btm01_left_kor');
let engDesc = document.querySelector('#btm01_left_eng');
let descImg = document.querySelector('#btm01_rig');
console.log(korDesc);
console.log(engDesc);

korVer.addEventListener('click',function(){
    //클릭시 텍스트 색상 변경
    korVer.classList.add('on');
    engVer.classList.remove('on');
    //display변경
    korDesc.style.display="block";
    engDesc.style.display="none"
    descImg.style.display="block"

})
engVer.addEventListener('click',function(){
    //클릭시 텍스트 색상 변경
    korVer.classList.remove('on');
    engVer.classList.add('on');
    //display변경
    korDesc.style.display="none";
    engDesc.style.display="block";
    descImg.style.display="none";
})
