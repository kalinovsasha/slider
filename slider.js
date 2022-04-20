const slider = {
    bntPrev: document.querySelector('#btnP'),
    bntNext: document.querySelector('#btnNext'),
}

slider.bntNext.addEventListener("click", ()=>moveNext())
slider.bntPrev.addEventListener("click", ()=>movePrev())

function moveNext(){
    document.querySelector('.slider_item2').classList.add("slider_moveRight")
    document.querySelector('.slider_item1').classList.add("slider_moveRight")
    //////////////////////////////////////////////////////////////////////////
    document.querySelector('.slider_moveRight').addEventListener('animationend', () => {
        document.querySelector('.slider_item2').classList.remove("slider_moveRight")
        document.querySelector('.slider_item1').classList.remove("slider_moveRight")
    });
}

function movePrev(){
    document.querySelector('.slider_item2').classList.add("slider_moveLeft")
    document.querySelector('.slider_item3').classList.add("slider_moveLeft")
    //////////////////////////////////////////////////////////////////////////
    document.querySelector('.slider_moveLeft').addEventListener('animationend', () => {
        document.querySelector('.slider_item2').classList.remove("slider_moveLeft")
        document.querySelector('.slider_item3').classList.remove("slider_moveLeft")
    });
}




