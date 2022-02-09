let pressBtn = document.querySelector('#btn01');
let mediaBtn = document.querySelector('#btn02');
let pressDesc = document.querySelector('#news');
let mediaDesc = document.querySelector('#media');

pressBtn.addEventListener('click',function(){
    //버튼 text,bg 색상 변경
    pressBtn.classList.add('on');
    mediaBtn.classList.remove('on');
    //display변경
    pressDesc.style.display="block";
    mediaDesc.style.display="none";
})

mediaBtn.addEventListener('click',function(){
     //버튼 text,bg 색상 변경
     pressBtn.classList.remove('on');
     mediaBtn.classList.add('on');
     //display변경
     pressDesc.style.display="none";
     mediaDesc.style.display="block"
})