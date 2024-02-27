document.addEventListener('DOMContentLoaded', function () {

    const menuList = document.getElementById('sticky-element'),
        stopPoint = menuList.offsetHeight + 100;

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const guideContentTop = document.querySelector('.guide__content')
            .getBoundingClientRect().top + window.scrollY;
        const guideContentBottom = guideContentTop
            + document.querySelector('.guide__content').offsetHeight;
        const bottomLimit = guideContentBottom - stopPoint; // 200 пикселей до нижней границы

        if (scrollPosition >= guideContentTop && scrollPosition <= bottomLimit) {
            menuList.style.transform = `translateY(${scrollPosition - guideContentTop}px)`;
        } else if (scrollPosition > bottomLimit) {
            menuList.style.transform = `translateY(${bottomLimit - guideContentTop}px)`;
        } else {
            menuList.style.transform = 'translateY(0)';
        }
    });
});



