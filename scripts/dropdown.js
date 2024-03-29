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
            // contentElement.classList.add('description-droped');
            descriptionElement.style.cursor = 'default';
            if (contentElement.classList.contains('add-margin-top')
                // && window.innerWidth > 1024) 
            ) {
                contentElement.style.marginTop = '35px';
            }
            if (contentElement.classList.contains('guide__content-description')) {
                contentElement.classList.add('extrapadding');
            }
        } else {
            if (event.target.classList.contains('arrow-toggler')) {
                contentElement.style.maxHeight = '';
                contentElement.style.marginTop = '';
                arrowToggler.classList.remove('rotated');
                // contentElement.classList.remove('description-droped');
                descriptionElement.style.cursor = '';
                if (contentElement.classList.contains('guide__content-description')) {
                    contentElement.classList.remove('extrapadding');
                }
            }
        }
    }

    descriptionElement.addEventListener('click', toggleDisplay);
});

