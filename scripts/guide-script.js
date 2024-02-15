document.addEventListener('DOMContentLoaded', function () {

    const menuList = document.getElementById('sticky-element'),
        menuParent = document.querySelector('.guide__content');

    window.addEventListener('scroll', function () {
        const menuParentRect = menuParent.getBoundingClientRect();

        // Вычисляем, насколько пользователь прокрутил страницу от верха контейнера до его низа в процентах
        const scrollPercentage = Math.max(0, Math.min(window.scrollY / menuParentRect.height, 1));

        // Вычисляем translateY в процентах от высоты контейнера
        const translateYPercentage = scrollPercentage * 100;

        // Применяем значение translateY
        menuList.style.transform = `translateY(${translateYPercentage}%)`;
    });

});

