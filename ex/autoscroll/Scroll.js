 //01. 스크롤 이벤트 연결
//윈도우의 높이값을 가져오기
let winh = window.innerHeight;
let lis = document.querySelectorAll('.rig_sub p');
let circles = document.querySelectorAll('.rig_sub span');
document.addEventListener('scroll',function(){
    //스크롤값 알아오기
    let sct = document.documentElement.scrollTop;
    console.log(sct);
    //스크롤 값이 0부터 1*winh보다 작을때 까지는 첫번째 li에 클래스 on을 추가
    if(sct>=0 && sct<1*winh){
        lis[0].classList.add('on');
        lis[1].classList.remove('on');
        lis[2].classList.remove('on');
        lis[3].classList.remove('on');
    }
    //스크롤 값이 1*winh와 같거나 크면서 2*winh보다 작을때 두번째 li에 클래스 on을 추가
    if(sct>=1*winh && sct<2*winh){
        lis[1].classList.add('on');
        lis[0].classList.remove('on');
        lis[2].classList.remove('on');
        lis[3].classList.remove('on');
    }
    if(sct>=2*winh && sct<3*winh){
        lis[2].classList.add('on');
        lis[0].classList.remove('on');
        lis[1].classList.remove('on');
        lis[3].classList.remove('on');
    }
    if(sct>=3*winh && sct<4*winh){
        lis[3].classList.add('on');
        lis[0].classList.remove('on');
        lis[1].classList.remove('on');
        lis[2].classList.remove('on');
    }
    // for(let i=0; i<lis.length; i++){
    //     if(sct>i*winh && sct<(i+1)*winh){
    //         lis[i].classList.add('on');
    //         lis[0].classList.remove('on');
    //         lis[1].classList.remove('on');
    //         lis[2].classList.remove('on');
    //     }
    // }
    for(let i=0; i<lis.length; i++){
        if(sct>=i*winh && sct<(i+1)*winh){
            lis[i].classList.add('on');
            for(let j=0; j<lis.length; j++){
                if(i!=j){
                    lis[j].classList.remove('on');
                    // lis[1].classList.remove('on');
                    // lis[2].classList.remove('on');
                }
            }
        }
    }
})
// lis[0].addEventListener('click',function(){
//     e.preventDefault();
//     window.scrollTo({top:0,behavior:'smooth'});
// })
// lis[1].addEventListener('click',function(){    e.preventDefault();
//     e.preventDefault();
//     window.scrollTo({top:1*winh,behavior:'smooth'})
// })
// lis[2].addEventListener('click',function(){
//     e.preventDefault();
//     window.scrollTo({top:2*winh,behavior:'smooth'})
// })
// lis[3].addEventListener('click',function(){
//     e.preventDefault();
//     window.scrollTo({top:3*winh,behavior:'smooth'})
// })
// lis[4].addEventListener('click',function(){
//     e.preventDefault();
//     window.scrollTo({top:4*winh,behavior:'smooth'})
// })
// lis[5].addEventListener('click',function(){
//     e.preventDefault();
//     window.scrollTo({top:5*winh,behavior:'smooth'})
// })
// lis[6].addEventListener('click',function(){
//     e.preventDefault();
//     window.scrollTo({top:6*winh,behavior:'smooth'})
// })

//02. 클릭시 해당 section으로 이동 for문 
for(let i=0; i<lis.length; i++){
    lis[i].addEventListener('click',function(e){
        e.preventDefault();
        window.scrollTo({top:i*winh,behavior:'smooth'})
    })
}

//forEach문
// lis.forEach((li,index)=>{
//     li.addEventListner('click',function(e){
//         e.preventDefault();
//         window.scrollTo({top:index*winh,behavior:'smooth'});
//     })
// })


//03. section04 스크롤시 scale 조정
