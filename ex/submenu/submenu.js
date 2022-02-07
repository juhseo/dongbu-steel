let openDiv = document.querySelector('#header div');
let closeDiv = document.querySelector('#close_btn');
let ul = document.querySelector('.sub_1st');
let lis = document.querySelectorAll('.sub_1st > li');
console.log(openDiv);
console.log(closeDiv);
console.log(lis[1]);
openDiv.addEventListener('click',function(){
    document.querySelector('#rigmenu').classList.add('on');
    document.querySelector('.blackbg').classList.add('on');
})
closeDiv.addEventListener('click',function(){
    document.querySelector('#rigmenu').classList.remove('on');
    document.querySelector('.blackbg').classList.remove('on');
    lis.forEach(li=>li.classList.remove('on'));
})
// ul.addEventListener('click',function(e){
//     lis.forEach(li => li.classList.remove('on'));
//     e.target.classList.toggle('on');
// })

// ul.addEventListener('click',function(e){
//     e.target.classList.toggle('on');
//     lis.forEach((li,index)=> {
//         li.classList.remove('on')
//     });
// })

lis.forEach((li,index)=>{
    li.addEventListener('click',function(){
        li.classList.toggle('on');
        lis.forEach((li,index2)=>{
            if(index!=index2){
                li.classList.remove('on');
            }
        })
    })
})