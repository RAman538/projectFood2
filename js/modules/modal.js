function openModal(modalSelector, setTimeShowModal) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if (setTimeShowModal) {
        clearInterval(setTimeShowModal);
    }

   // window.removeEventListener('scroll', showModalByScroll);
    
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

// функция показа модального окна при скроле в низ страницы

/* function showModalByScroll(modalSelector, setTimeShowModal) {

    if (document.documentElement.scrollHeight <= window.pageYOffset + document.documentElement.clientHeight + 1) {
        openModal(modalSelector, setTimeShowModal);
        window.removeEventListener('scroll', showModalByScroll);
    }
}
 */

function modal(triggerSelector, modalSelector, setTimeShowModal) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector);

        modalTrigger.forEach(i => {
            i.addEventListener('click', () => {
                
                openModal(modalSelector, setTimeShowModal); // чтобы передать в колбек функцию с аргументом,
                        // т.к она не должна быть вызвана сразу, оборачиваем ее в функцию стрелку
            });
        });

        modal.addEventListener('click', (e) => {

            if (e.target === modal || e.target.getAttribute('data-modalClose') == '') {
                closeModal(modalSelector);
            }
        });

        // функция закрытия модального окна с помощью кнопки 'esc'

        document.addEventListener('keydown', (e) => {

            if (e.code === 'Escape' && modal.classList.contains('show')) {
                closeModal(modalSelector);
            }
        });

        // функция показа модального окна при скроле в низ страницы

        function showModalByScroll() {

            if (document.documentElement.scrollHeight <= window.pageYOffset + document.documentElement.clientHeight + 1) {
                openModal(modalSelector, setTimeShowModal);
                window.removeEventListener('scroll', showModalByScroll);
            }
        }

        window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {openModal};
export {closeModal};
// export {showModalByScroll};