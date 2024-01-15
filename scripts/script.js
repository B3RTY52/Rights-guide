'use strict';

document.addEventListener('DOMContentLoaded', function () {

    console.log('cakc');


    const bannerCases = document.querySelector('.banner__cases');
    const cases = ['протоколы', 'допрос', 'обыск', 'полиция', 'задержание',];
    const width = bannerCases.offsetWidth;

    let index = 0;

    function animate() {
        // const width = bannerCases.offsetWidth;

        bannerCases.animate([
            { opacity: 1, transform: `translateX(${-width}px)` },
            { opacity: 1, transform: 'translateX(0)' },
            { opacity: 1, transform: 'translateX(0)' },
            { opacity: 0, transform: `translateX(${width / 2}px)` },
            { opacity: 0, transform: `translateX(${width}px)` }
        ], {
            duration: 3000,
            iterations: Infinity
        });
    }

    // Вызываем функцию animate один раз для начала анимации
    animate();

    // Используем один общий интервал для смены контента и перезапуска анимации
    setInterval(() => {
        bannerCases.textContent = cases[index];
        index = (index + 1) % cases.length;

        // Перезапускаем анимацию
        animate();
    }, 3000);


    // let index = 0,
    //     width = 0;

    // animate();

    // setInterval(function () {
    //     bannerCases.textContent = cases[index];
    //     index = (index + 1) % cases.length;
    //     width = bannerCases.offsetWidth;
    // }, 3000);

    document.addEventListener('scroll', paralax);

    function paralax() {
        let scrollPosition = window.scrollY;
        let parallaxElement = document.querySelector('.paralax');
        let parallaxParent = document.querySelector('.banner');
        let parallaxParentRect = parallaxParent.getBoundingClientRect();

        if (parallaxParentRect.top <= 0 && parallaxParentRect.bottom >= 0) {
            parallaxElement.style.transform = 'translate(-50%, calc(-50% + ' + scrollPosition * 0.5 + 'px))';
        }
    }

    // function animate() {
    //     // const width = bannerCases.offsetWidth;

    //     bannerCases.animate([
    //         { opacity: 1, transform: `translateX(${-width}px)` },
    //         // { opacity: 1, transform: `translateX(${-bannerCases.offsetWidth}px)` },
    //         { opacity: 1, transform: 'translateX(0)' },
    //         { opacity: 1, transform: 'translateX(0)' },
    //         { opacity: 0, transform: `translateX(${width}px)` },
    //         { opacity: 0, transform: `translateX(${width}px)` }
    //         // { opacity: 0, transform: `translateX(${bannerCases.offsetWidth}px)` }
    //     ], {
    //         duration: 3000,
    //         iterations: Infinity
    //     });
    // }

});


