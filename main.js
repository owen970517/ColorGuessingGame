let getRGB = document.getElementById('rgbSpan');
let boxes = document.querySelectorAll('.box');
const playBtn = document.querySelector('.playBtn');
const easyBtn = document.querySelector('.easyBtn');
const hardBtn = document.querySelector('.hardBtn');
const newColor = document.querySelector('.playAgain');
//const r = Math.floor(Math.random() * 255) + 1;
//const g = Math.floor(Math.random() * 255) + 1;
//const b = Math.floor(Math.random() * 255) + 1;
var colors = generateRandomColor(6);
//var chooseColor = colors[Math.floor(Math.random()*6)];
var boxCount = 6;



easyBtn.addEventListener('click' , ()=> {
    playBtn.classList.add('active');
    easyBtn.classList.toggle('active');
    hardBtn.classList.remove('active');
    playBtn.innerHTML="Playing easy"
    boxCount=3;
    colors = generateRandomColor(boxCount);
    chooseColor = colors[Math.floor(Math.random()*3)];
    for (var i=0; i < boxes.length; i++) {
        if(colors[i]) {
            boxes[i].style.background =colors[i];
        } else {
            boxes[i].style.display = 'none';
        }
    }
    getRGB.textContent = chooseColor;
    document.querySelector('h1').style.background = chooseColor;
})
hardBtn.addEventListener('click' , ()=> {
    playBtn.classList.add('active');
    hardBtn.classList.toggle('active');
    easyBtn.classList.remove('active');
    playBtn.innerHTML="Playing Hard"
    boxCount=6;
    colors = generateRandomColor(boxCount);
    chooseColor = colors[Math.floor(Math.random()*6)];
    for (var i=0; i < boxes.length; i++) {
        boxes[i].style.background =colors[i];
        boxes[i].style.display = 'block';
        
    }
    getRGB.textContent = chooseColor;
    document.querySelector('h1').style.background = chooseColor;
});
// 플레이 버튼을 클릭 했을 때
playBtn.addEventListener('click' , ()=> {
    playBtn.textContent = "Playing...";
    playBtn.classList.toggle('active');
    colors = generateRandomColor(boxCount);
    chooseColor = colors[Math.floor(Math.random()*boxCount)];
    getRGB.textContent = chooseColor;
    document.querySelector('h1').style.background = chooseColor;
    for (var i =0; i<boxes.length; i++) {
        boxes[i].style.background = colors[i];
    }

});
// 새로운 컬러를 만들고 싶을 때 
newColor.addEventListener('click' , ()=> {
    playBtn.textContent = "Restart!"
    colors = generateRandomColor(boxCount);
    chooseColor = colors[Math.floor(Math.random()*boxCount)];
    getRGB.textContent = chooseColor;
    document.querySelector('h1').style.background = chooseColor;
    for (var i =0; i<boxes.length; i++) {
        boxes[i].style.background = colors[i];
    }
})
// 모든 박스들에게 클릭 이벤트를 주고 클릭한 값과 제시한 값이 같은지 비교 후 정답 유무 함수 실행
for(var i=0; i<colors.length; i++) {
    boxes[i].addEventListener('click' , function() {
        var selectedColor = this.style.background;
        if(selectedColor === document.querySelector('h1').style.background) {
            correct();
        } else {
            wrong(this);
        }
        
    });
}
// 답을 맞췄으면 전체 의 박스를 정답과 같은 색상으로 바꿔준다.
function correct() {
    for(var i=0; i<colors.length; i++) {
        boxes[i].style.background = chooseColor;
    }
    playBtn.innerHTML = "Correct!!!";
}
// 잘못된 색상을 클릭 했을 경우 클릭한 부분의 배경색을 전체 배경색과 똑같이 바꿔줌으로서 없어진 것 처럼 한다.
function wrong(e) {
    e.style.background = "aquamarine";
    playBtn.innerHTML = "Try Again!!!";
}
// 배열을 생성하고 생성하고 싶은 색상의 개수를 파라미터로 받아오고 반복문을 돌릴 때 마다 배열에 넣는다 
function generateRandomColor(num) {
    var arr = [];
    for(var i=0; i<num; i++) {
        arr.push(randomColor());
    }
    return arr;
}
//  0~255 사이의 랜덤한 값을 정해서 r,g,b 의 값에 넣어서 색상을 생성 
function randomColor() {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `RGB(${r},${g},${b})`;

}
