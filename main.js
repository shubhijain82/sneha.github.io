let background1 = document.getElementById('background1')
let background2 = document.getElementById('background2')
let background3 = document.getElementById('background3')
let background4 = document.getElementById('background4')

window.addEventListener("scroll", ()=>{
    let scrollValue = window.scrollY;
    background1.style.top = scrollValue * 0.8 + "px";
    heroText.style.marginTop = scrollValue * 1 +'px';
    background2.style.left = scrollValue * -1.2 + "px";
    background3.style.left = scrollValue * 1.2 + "px";
})