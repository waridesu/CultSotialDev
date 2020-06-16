const slider = document.querySelector('.slider');
const sliderImgs = document.querySelectorAll('.slider img');

const prevBtn = document.querySelector('.left')
const nextBtn = document.querySelector('.right')

let counter = 0;


let size = document.querySelector('.slider img').width + 4;

prevBtn.disabled = true;

nextBtn.addEventListener('click', () => {
    prevBtn.disabled = false;
    slider.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';


    if (document.documentElement.clientWidth > 530 && (counter >= sliderImgs.length - 3)) {
        nextBtn.disabled = true;
    }
    else {
        if (counter >= sliderImgs.length - 1) {
            nextBtn.disabled = true;
        }
    }


});

prevBtn.addEventListener('click', () => {
    nextBtn.disabled = false;
    slider.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    if (counter <= 0) {
        prevBtn.disabled = true;
    }
});

window.addEventListener('resize',()=>{
    window.location.href = window.location.href;
});