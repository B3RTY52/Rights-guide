document.addEventListener('DOMContentLoaded', function () {
    const descriptionElement = document.querySelector('.description');
    const contentElement = document.querySelector('.description-dropdown');
    const arrowToggler = document.querySelector('.arrow-toggler');

    console.log(descriptionElement, contentElement, arrowToggler);

    function toggleDisplay() {
        if (contentElement.style.maxHeight === '0px'
            || contentElement.style.maxHeight === '') {
            contentElement.style.maxHeight = '100%';
            arrowToggler.classList.add('rotated');
            descriptionElement.style.cursor = 'default';
            if (contentElement.classList.contains('margin50')) {
                contentElement.style.marginTop = '50px';
            }
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

