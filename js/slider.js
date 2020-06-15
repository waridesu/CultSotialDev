const slider = document.querySelector('.slider');
const sliderImgs = document.querySelectorAll('.slider img');

const prevBtn = document.querySelector('.left')
const nextBtn = document.querySelector('.right')

let counter = 0;



let size = sliderImgs[0].width + 4;
prevBtn.disabled = true;

nextBtn.addEventListener('click', () => {
    slider.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    prevBtn.disabled = false;

    if (document.documentElement.clientWidth > 1200 && (counter >= sliderImgs.length - 3)) {
        nextBtn.disabled = true;
    }
    else {
        if (counter >= sliderImgs.length - 1) {
            nextBtn.disabled = true;
        }
    }


});

prevBtn.addEventListener('click', () => {
    slider.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    if (counter <= 0) {
        prevBtn.disabled = true;
    }
});