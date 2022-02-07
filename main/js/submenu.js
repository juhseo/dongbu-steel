let openDiv = document.querySelector('#imenu');
let closeDiv = document.querySelector('#close_btn > span');
let ul = document.querySelector('.sub_1st');
let liss = document.querySelectorAll('.sub_1st > li');
console.log(openDiv);
console.log(closeDiv);
console.log(liss[1]);
//open
openDiv.addEventListener('click',function(){
    document.querySelector('#rigmenu').classList.add('on');
    document.querySelector('#rigsubb').classList.add('on');
})
//close
closeDiv.addEventListener('click',function(){
    document.querySelector('#rigsubb').classList.remove('on');
    document.querySelector('#rigmenu').classList.remove('on');
    liss.forEach(li=>li.classList.remove('on'));
})

liss.forEach((li,index)=>{
    li.addEventListener('click',function(){
        li.classList.toggle('on');
        liss.forEach((li,index2)=>{
            if(index!=index2){
                li.classList.remove('on');
            }
        })
    })
})