const slider = document.querySelector('.slider');
const sliderImgs = document.querySelectorAll('.slider img');

const prevBtn = document.querySelector('.left')
const nextBtn = document.querySelector('.right')

let counter = 0;

prevBtn.disabled = true;

nextBtn.addEventListener('click', () => {
    prevBtn.disabled = false;
    slider.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    sliderMove();
});

prevBtn.addEventListener('click', () => {
    nextBtn.disabled = false;
    slider.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    if (counter <= 0) {
        prevBtn.disabled = true;
    }
    sliderMove();
});

function sliderMove() {
    if (window.innerWidth > 1700) {
        slider.style.transform = 'translateX(' + ((-100 / 6) * counter) + '%)';
        if (counter >= sliderImgs.length - 6) {
            counter=0;
        }
    }
    else if (window.innerWidth < 1700 && window.innerWidth > 1500) {
        slider.style.transform = 'translateX(' + ((-100 / 5) * counter) + '%)';
        if (counter >= sliderImgs.length - 5) {
            counter=0;

        }
    }
    else if (window.innerWidth < 1500 && window.innerWidth > 1060) {
        slider.style.transform = 'translateX(' + ((-100 / 4) * counter) + '%)';
        if (counter >= sliderImgs.length - 4) {
            counter=0;

        }
    }
    else if (window.innerWidth < 1060 && window.innerWidth > 800) {
        slider.style.transform = 'translateX(' + ((-100 / 3) * counter) + '%)';
        if (counter >= sliderImgs.length - 3) {
            counter=0;

        }
    }
    else if (window.innerWidth < 800 && window.innerWidth > 530) {
        slider.style.transform = 'translateX(' + ((-100 / 2) * counter) + '%)';
        if (counter >= sliderImgs.length - 2) {
            counter=0;

        }
    }
    else  {
            slider.style.transform = 'translateX(' + ((-100) * counter) + '%)';
            if (counter >= sliderImgs.length - 1) {
                counter=0;
            }
        }
    }

    window.addEventListener("resize", function () {
        sliderMove();
        if (counter>=counter-1) {
            counter=0;
            prevBtn.disabled = true;
        }
    });