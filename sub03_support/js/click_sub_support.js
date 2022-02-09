let consultant = document.querySelector('#con_btn');
let catalogue = document.querySelector('#catal_btn');
let pdData = document.querySelector('#prod_btn');

console.log(consultant);
console.log(catalogue);
console.log(pdData);

consultant.addEventListener('click',function(){
    consultant.classList.add('on');
    catalogue.classList.remove('on');
    pdData.classList.remove('on');
})
catalogue.addEventListener('click',function(){
    consultant.classList.remove('on');
    catalogue.classList.add('on');
    pdData.classList.remove('on');
})
pdData.addEventListener('click',function(){
    consultant.classList.remove('on');
    catalogue.classList.remove('on');
    pdData.classList.add('on');
})


consultant.addEventListener('click',function(){
    document.querySelector('#consultant').style.display="block";
    document.querySelector('#catalogue_dwn').style.display="none";
    document.querySelector('#product_data').style.display="none";
})
catalogue.addEventListener('click',function(){
    document.querySelector('#consultant').style.display="none";
    document.querySelector('#catalogue_dwn').style.display="block";
    document.querySelector('#product_data').style.display="none";
})
pdData.addEventListener('click',function(){
    document.querySelector('#consultant').style.display="none";
    document.querySelector('#catalogue_dwn').style.display="none";
    document.querySelector('#product_data').style.display="block";
})