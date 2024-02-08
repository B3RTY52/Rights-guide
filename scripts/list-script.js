// function slider({ container, slide, prevArrow, nextArrow,
//     totalCounter, currentCounter, wrapper, field }) {
window.addEventListener('DOMContentLoaded', () => {

    let offset = 0;

    const slides = document.
        querySelector('.categories__list-list').querySelectorAll('.categories__list-item'),
        prevBtn = document.querySelector('.left'),
        nextBtn = document.querySelector('.right'),
        slidesWrapper = document.querySelector('.slides-wrapper'),
        slidesField = document.querySelector('.categories__list-list'),
        width = window.getComputedStyle(slides[0]).width;

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';
    slides.forEach((slide) => { slide.style.marginRight = `20px` });

    // function strToDigits(str) {
    //     return +str.replace(/\D/g, '');
    // }

    function strToDigits(str) {
        const match = str.match(/(\d+\.\d+|\d+)/);
        return match ? +match[0] + 20 : NaN;
    }

    console.log(strToDigits(width) / 3, width);

    nextBtn.addEventListener('click', () => {
        if (offset ==
            strToDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += strToDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    prevBtn.addEventListener('click', () => {
        if (offset == 0) {
            offset = strToDigits(width) * (slides.length - 1);
        } else {
            offset -= strToDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

});


// }

// export default slider;