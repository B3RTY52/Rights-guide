'use strict';


document.addEventListener('DOMContentLoaded', function () {
    const descriptionElement = document.querySelector('.lek-description');
    const contentElement = document.querySelector('.lek-description__content');
    const arrowToggler = document.querySelector('.arrow-toggler');

    // Функция для изменения свойства display и поворота стрелки
    function toggleDisplay() {
        if (contentElement.style.maxHeight === '0px'
            || contentElement.style.maxHeight === '') {
            contentElement.style.maxHeight = '100%';
            contentElement.style.marginTop = '50px'; // Задайте здесь высоту, которую вы хотите показать
            arrowToggler.classList.add('rotated');
            descriptionElement.style.cursor = 'default';
        } else {
            if (event.target.classList.contains('arrow-toggler')) {
                contentElement.style.maxHeight = '';
                contentElement.style.marginTop = '';
                arrowToggler.classList.remove('rotated');
                descriptionElement.style.cursor = '';
            }
        }
    }

    descriptionElement.addEventListener('click', toggleDisplay);
});

