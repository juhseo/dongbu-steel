const slideGroup = document.querySelector('#slide_group');
console.log(slideGroup);
const firstImg = slideGroup.firstElementChild;
const lastImg = slideGroup.lastElementChild;
const nav = document.querySelector('#nav');
let current = 1;
let prev;
let next;
let timer;

//node copy
let cloneFirst = firstImg.cloneNode(true);
let cloneLast = lastImg.cloneNode(true);

//마지막에 추가하기
slideGroup.appendChild(cloneFirst);
//원하는 위치에 추가하기->insertBefore(추가할 항목, 추가할 위치)
slideGroup.insertBefore(cloneLast,slideGroup.firstElementChild);


//스타일 변경하기
//이미지를 감싸는 div의 크기를 이미지 갯수 *100%
//이미지의 크기는  100/이미지갯수% 로 변경

//이미지 갯수
const slideImg = document.querySelectorAll('.slide_img');
slideGroup.style.width = slideImg.length * 100+'%';
slideGroup.style.left =  -(current*100)+'%';
slideImg.forEach( (img,index)=> {
    img.style.width = 100/slideImg.length + '%';
    img.style.left = index * (100/slideImg.length) + '%';
})

//이동
function slideMove(imgNum){
    slideGroup.style.transition = '1s';
    slideGroup.style.left = -(imgNum*100)+'%';
    current = imgNum;
    //current -> 몇번을 보고 있는지 보여주는 것 .
    console.log(current);
    if(imgNum==5){
        firstCurrent();
    }
}
//이벤트 연결
nav.addEventListener('click',function(e){
    e.preventDefault();
    //클릭한 a가 next라면
    if(e.target.className == 'next'){
        if(current < 5){
            next = current + 1;
            slideMove(next);
        }
        if(current == 5){
            firstCurrent();
        }
    }else{
        if(current > 0){
            prev = current -1;
            slideMove(prev);
        }
        if(current ==0){
            lastCurrent();
        }
    }
})
//1번 이미지 위치로 이동 (left:-100%)
function firstCurrent(){
    setTimeout(function(){
        slideGroup.style.transition = '0ms';
        slideGroup.style.left = '-100%';
        current = 1;
    },500)
}
//4번 이미지 위치로 이동 (left:-400)
function lastCurrent(){
    setTimeout(function(){
        slideGroup.style.transition = '0ms';
        slideGroup.style.left = '-400%';
        current = 4;
    },500)
}


function startIt(){
    if(timer) stopIt();
    timer = setInterval(()=>{
        slideMove(current+1);
        console.log('진행중');
    },5000);
}


function stopIt(){
    clearInterval(timer);
    console.log('중지');
}
nav.addEventListener('mouseenter',stopIt);
nav.addEventListener('mouseleave',startIt);
startIt();