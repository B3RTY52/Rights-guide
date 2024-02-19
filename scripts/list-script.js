// function slider({ container, slide, prevArrow, nextArrow,
//     totalCounter, currentCounter, wrapper, field }) {
window.addEventListener('DOMContentLoaded', () => {

    let offset = 0;

    const slides = document.querySelectorAll('.slides'),
        // querySelector('.categories__list-list').querySelectorAll('.categories__list-item'),
        prevBtn = document.querySelector('.left'),
        nextBtn = document.querySelector('.right'),
        slidesWrapper = document.querySelector('.slides-wrapper'),
        // slidesField = document.querySelector('.categories__list-list'),
        slidesField = document.querySelector('.slides-field'),
        width = window.getComputedStyle(slides[0]).width;

    slidesField.style.transition = '0.5s all';

    function strToDigits(str) {
        const match = str.match(/(\d+\.\d+|\d+)/);
        return match ? +match[0] + 20 : NaN;
    }

    console.log(strToDigits(width), width, slides.length);

    nextBtn.addEventListener('click', () => {
        if (offset ==
            strToDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += strToDigits(width) * 2;
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    prevBtn.addEventListener('click', () => {
        if (offset == 0) {
            offset = strToDigits(width) * (slides.length - 1);
        } else {
            offset -= strToDigits(width) * 2;
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

});
