document.addEventListener('DOMContentLoaded', function () {

    // const menuList = document.getElementById('sticky-element'),
    //     // Получаем начальные координаты верхней границы menuList относительно верхнего края документа
    //     menuListTop = menuList.getBoundingClientRect().top + window.scrollY,

    // window.addEventListener('scroll', function () {
    //     // Вычисляем, насколько прокручена страница относительно верха экрана
    //     const scrollPosition = window.scrollY;

    //     // Проверяем, достигла ли верхняя граница menuList верхней границы экрана
    //     if (menuListTop <= scrollPosition) {
    //         // Если условие выполняется, применяем трансформацию
    //         menuList.style.transform = `translateY(${scrollPosition - menuListTop + 10}px)`;
    //     } else {
    //         // Иначе сбрасываем трансформацию
    //         menuList.style.transform = 'translateY(0)';
    //     }
    // });
    const menuList = document.getElementById('sticky-element');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const guideContentTop = document.querySelector('.guide__content')
            .getBoundingClientRect().top + window.scrollY;
        const guideContentBottom = guideContentTop
            + document.querySelector('.guide__content').offsetHeight;
        const bottomLimit = guideContentBottom - 200; // 200 пикселей до нижней границы

        if (scrollPosition >= guideContentTop && scrollPosition <= bottomLimit) {
            menuList.style.transform = `translateY(${scrollPosition - guideContentTop}px)`;
        } else if (scrollPosition > bottomLimit) {
            menuList.style.transform = `translateY(${bottomLimit - guideContentTop}px)`;
        } else {
            menuList.style.transform = 'translateY(0)';
        }
    });
});



