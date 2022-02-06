
const imgDivs = document.querySelectorAll('.fadeImg');
let indexNum = 0;
let nextNum;
console.log(imgDivs);

imgDivs.forEach(div=> div.style.display = 'none');
imgDivs[indexNum].style.display = 'block';

function chImg(){
    nextNum = indexNum == 3? 0 : indexNum+1;
    imgDivs[indexNum].style.display='none';
    imgDivs[nextNum].style.display='block';
    indexNum = nextNum;
}
setInterval(chImg,3000);





// imgDivs[0].style.display = 'none';
// imgDivs[1].style.display = 'none';
// imgDivs[2].style.display = 'none';
// imgDivs[3].style.display = 'none';