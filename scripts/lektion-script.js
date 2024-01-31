'use strict';

document.addEventListener('DOMContentLoaded', function () {

    const descriptionElement = document.querySelector('.lek-description');
    const contentElement = document.querySelector('.lek-description__content');

    console.log(contentElement, descriptionElement);

    descriptionElement.addEventListener('click', toggleDisplay);

    function toggleDisplay() {
        if (contentElement.style.display === 'none' || contentElement.style.display === '') {
            contentElement.style.display = 'flex';
            descriptionElement.style.cursor = 'default';
        } else {
            contentElement.style.display = 'none';
        }
    }
});


