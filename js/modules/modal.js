function modal() {
    const buttons = document.querySelectorAll('[data-modalBut]'),
              modal = document.querySelector('.modal');

        function openModal() {
                modal.classList.add('show');
                modal.classList.remove('hide');
                document.body.style.overflow = 'hidden';
                clearInterval(setTimeShowModal);
        }

        buttons.forEach(i => {
            i.addEventListener('click', () => {
                
                openModal();
                
            });
        });

        function closeModal() {

            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }

        modal.addEventListener('click', (e) => {

            if (e.target === modal || e.target.getAttribute('data-close') == '') {
                closeModal();
            }
        });

        // функция закрытия модального окна с помощью кнопки 'esc'

        document.addEventListener('keydown', (e) => {

            if (e.code === 'Escape' && modal.classList.contains('show')) {
                closeModal();
            }
        });

        // функция показа модального окна через некоторое время

        const setTimeShowModal = setTimeout(openModal, 80000);

        // функция показа модального окна при скроле в низ страницы

        function showModalByScroll() {

            if (document.documentElement.scrollHeight <= window.pageYOffset + document.documentElement.clientHeight) {
                openModal();
                window.removeEventListener('scroll', showModalByScroll);
            }
        }

        window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;