'use strict';

// document.addEventListener('DOMContentLoaded', function () {

//     const descriptionElement = document.querySelector('.lek-description');
//     const contentElement = document.querySelector('.lek-description__content');
//     const arrowToggler = document.querySelector('.arrow-toggler');

//     console.log(contentElement, descriptionElement);

//     descriptionElement.addEventListener('click', toggleDisplay);

//     // function toggleDisplay() {
//     //     if (contentElement.style.display === 'none' || contentElement.style.display === '') {
//     //         contentElement.style.display = 'flex';
//     //         descriptionElement.style.cursor = 'default';
//     //     } else {
//     //         contentElement.style.display = 'none';
//     //     }
//     // }

//     function toggleDisplay() {
//         if (contentElement.style.transform === 'translateY(0%)') {
//             contentElement.style.transform = 'translateY(-100%)';
//             arrowToggler.classList.remove('rotated');
//         } else {
//             contentElement.style.transform = 'translateY(0%)';
//             arrowToggler.classList.add('rotated');
//         }
//     }

// });

document.addEventListener('DOMContentLoaded', function () {
    const descriptionElement = document.querySelector('.lek-description');
    const contentElement = document.querySelector('.lek-description__content');
    const arrowToggler = document.querySelector('.arrow-toggler');

    // Функция для изменения свойства display и поворота стрелки
    function toggleDisplay() {
        if (contentElement.style.maxHeight === '0px') {
            contentElement.style.maxHeight = '100%';
            contentElement.style.marginTop = '50px'; // Задайте здесь высоту, которую вы хотите показать
            arrowToggler.classList.add('rotated');
        } else {
            contentElement.style.maxHeight = '0px';
            contentElement.style.marginTop = '0px';
            arrowToggler.classList.remove('rotated');
        }
    }

    // Добавляем обработчик события на клик
    descriptionElement.addEventListener('click', toggleDisplay);
});

