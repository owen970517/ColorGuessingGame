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
    hardBtn.classList.toggle('active');
    easyBtn.classList.toggle('active');
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
newColor.addEventListener('click' , ()=> {
    //playBtn.textContent = "Playing..."
    colors = generateRandomColor(boxCount);
    chooseColor = colors[Math.floor(Math.random()*boxCount)];
    getRGB.textContent = chooseColor;
    document.querySelector('h1').style.background = chooseColor;
    for (var i =0; i<boxes.length; i++) {
        boxes[i].style.background = colors[i];
    }
})

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
function correct() {
    for(var i=0; i<colors.length; i++) {
        boxes[i].style.background = chooseColor;
    }
    playBtn.innerHTML = "Correct!!!";
}
function wrong(e) {
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
