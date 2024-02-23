window.addEventListener('DOMContentLoaded', () => {

    let offset = 0;

    const slides = document.querySelectorAll('.slides-item'),
        // querySelector('.categories__list-list').querySelectorAll('.categories__list-item'),
        prevBtn = document.querySelector('.left'),
        nextBtn = document.querySelector('.right'),
        // slidesField = document.querySelector('.categories__list-list'),
        slidesField = document.querySelector('.slides-field'),
        width = window.getComputedStyle(slides[0]).width;

    slidesField.style.transition = '0.5s all';

    nextBtn.addEventListener('click', () => {
        if (offset >=
            strToDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            if (slidesField.classList.contains('slides-once')) {
                offset += strToDigits(width);
            } else {
                offset += strToDigits(width) * 2;
            }
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    prevBtn.addEventListener('click', () => {
        if (offset <= 0) {
            offset = strToDigits(width) * (slides.length - 1);
        } else {
            offset -= strToDigits(width) * 2;
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });


    function strToDigits(str) {
        const match = str.match(/(\d+\.\d+|\d+)/);
        return match ? +match[0] + 20 : NaN;
    }
});
