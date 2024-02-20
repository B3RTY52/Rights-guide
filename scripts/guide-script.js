document.addEventListener('DOMContentLoaded', function () {

    const menuList = document.getElementById('sticky-element'),
        // Получаем начальные координаты верхней границы menuList относительно верхнего края документа
        menuListTop = menuList.getBoundingClientRect().top + window.scrollY;

    window.addEventListener('scroll', function () {
        // Вычисляем, насколько прокручена страница относительно верха экрана
        const scrollPosition = window.scrollY;

        // Проверяем, достигла ли верхняя граница menuList верхней границы экрана
        if (menuListTop <= scrollPosition) {
            // Если условие выполняется, применяем трансформацию
            menuList.style.transform = `translateY(${scrollPosition - menuListTop + 10}px)`;
        } else {
            // Иначе сбрасываем трансформацию
            menuList.style.transform = 'translateY(0)';
        }
    });
});



