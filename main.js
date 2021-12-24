let getRGB = document.getElementById('rgbSpan');
let selectBox = document.querySelectorAll('.box');
let box = document.getElementById('box');
const playBtn = document.querySelector('.playBtn');
const r = Math.floor(Math.random() * 255) + 1;
const g = Math.floor(Math.random() * 255) + 1;
const b = Math.floor(Math.random() * 255) + 1;

playBtn.addEventListener('click' , ()=> {
    playBtn.textContent = "Playing...";
    getRGB.innerHTML = `RGB(${r} , ${g} , ${b})`;
})


