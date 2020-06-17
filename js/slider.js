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
    if(document.documentElement.clientWidth >530){
        slider.style.transform = 'translateX(' + ((-100 / 3) * counter) + '%)';
        if (counter >= sliderImgs.length - 3) {
            nextBtn.disabled = true;
        }
    }
    else {
        slider.style.transform = 'translateX(' + (-100 * counter) + '%)';
        if (counter >= sliderImgs.length - 1) {
            nextBtn.disabled = true;
        }
    }
});

prevBtn.addEventListener('click', () => {
    nextBtn.disabled = false;
    slider.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    if (counter <= 0) {
        prevBtn.disabled = true;
    }
    if(document.documentElement.clientWidth >530){
        slider.style.transform = 'translateX(' + ((-100 / 3) * counter) + '%)';
    }
    else {
        slider.style.transform = 'translateX(' + (-100 * counter) + '%)';
    }
});