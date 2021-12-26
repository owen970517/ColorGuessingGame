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
//var pickedColor = colors[Math.floor(Math.random()*6)];
var boxCount = 6;



easyBtn.addEventListener('click' , ()=> {
    easyBtn.classList.toggle('active');
    hardBtn.classList.remove('active');
    playBtn.innerHTML="Playing easy"
    boxCount=3;
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random()*3)];
    for (var i=0; i < boxes.length; i++) {
        if(colors[i]) {
            boxes[i].style.background =colors[i];
        } else {
            boxes[i].style.display = 'none';
        }
    }
    getRGB.textContent = pickedColor;
    document.querySelector('h1').style.background = pickedColor;
})
hardBtn.addEventListener('click' , ()=> {
    hardBtn.classList.toggle('active');
    easyBtn.classList.toggle('active');
    playBtn.innerHTML="Playing Hard"
    boxCount=6;
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random()*6)];
    for (var i=0; i < boxes.length; i++) {
        boxes[i].style.background =colors[i];
        boxes[i].style.display = 'block';
        
    }
    getRGB.textContent = pickedColor;
    document.querySelector('h1').style.background = pickedColor;
});

playBtn.addEventListener('click' , ()=> {
    playBtn.textContent = "Playing...";
    playBtn.classList.toggle('active');
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random()*boxCount)];
    getRGB.textContent = pickedColor;
    document.querySelector('h1').style.background = pickedColor;
    for (var i =0; i<boxes.length; i++) {
        boxes[i].style.background = colors[i];
    }

});
newColor.addEventListener('click' , ()=> {
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random()*boxCount)];
    getRGB.textContent = pickedColor;
    document.querySelector('h1').style.background = pickedColor;
    for (var i =0; i<boxes.length; i++) {
        boxes[i].style.background = colors[i];
    }
})

for(var i=0; i<boxes.length; i++) {
    boxes[i].addEventListener('click' , ()=> {
        var selectedColor = this.style.background;
        if(selectedColor === pickedColor) {
            win();
        } else {
            lose(this);
        }
        
    });
}
function win() {
    for(var i=0; i<colors.length; i++) {
        boxes[i].style.background = pickedColor;
    }
    playBtn.innerHTML = "Correct!!!";
}
function lose(e) {
    e.style.background = "aquamarine";
    playBtn.innerHTML = "Try Again!!!";
}

function generateRandomColor(num) {
    var arr = [];
    for(var i=0; i<num; i++) {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor() {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `RGB(${r},${g},${b})`;

}
