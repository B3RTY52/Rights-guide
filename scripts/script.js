document.addEventListener('DOMContentLoaded', function () {

    const bannerCases = document.querySelector('.banner__cases');
    const cases = ['протоколы', 'допрос', 'обыск', 'полиция', 'задержание',];
    const width = bannerCases.offsetWidth;

    let index = 0;

    animate();

    setInterval(() => {
        bannerCases.textContent = cases[index];
        index = (index + 1) % cases.length;

        animate();
    }, 3000);

    document.addEventListener('scroll', parallax);


    function animate() {

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

    function parallax() {
        const scrollPosition = window.scrollY;
        const parallaxElements = document.querySelectorAll('.parallax');
        const parallaxParent = document.querySelector('.banner');
        const parallaxParentRect = parallaxParent.getBoundingClientRect();

        if (parallaxParentRect.top <= 0 && parallaxParentRect.bottom >= 0) {
            parallaxElements.forEach((element) => {
                // Проверяем, отображается ли элемент
                if (window.getComputedStyle(element).display !== 'none') {
                    element.style.transform = 'translate(-50%, calc(-50% + ' + scrollPosition * 0.5 + 'px))';
                }
            });
        }
    }

});


