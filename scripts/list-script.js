// function slider({ container, slide, prevArrow, nextArrow,
//     totalCounter, currentCounter, wrapper, field }) {
window.addEventListener('DOMContentLoaded', () => {
    const slides = document.
        querySelector('.categories__list-list').querySelectorAll('.categories__list-item'),
        prevBtn = document.querySelector('.left'),
        nextBtn = document.querySelector('.right'),
        slidesWrapper = document.querySelector('.slides-wrapper'),
        slidesField = document.querySelector('.categories__list-list'),
        width = window.getComputedStyle(slidesWrapper).width;

    console.log(prevBtn, nextBtn);

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';

    function strToDigits(str) {
        return +str.replace(/\D/g, '');
    }

    nextBtn.addEventListener('click', () => {
        slidesField.style.transform = `translateX(${strToDigits(width) / 3}px)`;
    });

    prevBtn.addEventListener('click', () => {
        slidesField.style.transform = `translateX(-${strToDigits(width) / 3}px)`;
    });

});


// }

// export default slider;