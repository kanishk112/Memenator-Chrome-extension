const memeBtn = document.getElementById('memeBtn');
const bg = ["#ff381", "#93f", "#f56", "eeff00", "003cff"];
const fg = ["#111","#111", "#111"];

function colorChange() {
    let limit = bg.length;
    let index = Math.floor(Math.random() * limit);
    memeBtn.style.background = bg[index];
    memeBtn.style.color = fg[index];
    
}