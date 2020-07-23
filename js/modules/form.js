function form() {
    const forms = document.querySelectorAll('form');
    
        const message = {
            loading: 'img/form/spinner.svg',
            success: 'Мы скоро перезвоним',
            failure: 'Что то пошло не так...'
        };
    
        forms.forEach(item => {
            bindPostData(item);
        });


        const postData = async (url, data) => {

            const resultPost = await fetch(url, {

                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: data
            });

            return await resultPost.json();  
        };
      
        function bindPostData(form) {
            form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const jeson = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', jeson) 
            .then(data => {
                console.log(data);
                    thanksModalShow(message.success);
                    statusMessage.remove();
            })
            .catch(() => {
                thanksModalShow(message.failure);
            })
            .finally(() => {
                form.reset();
            });
        });
    }

    function thanksModalShow(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const modalDialog = document.createElement('div');
        modalDialog.classList.add('modal__dialog');

        modalDialog.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>&times;</div>
                <div class="modal__title">${message}</div>
            </div>
         `;

         document.querySelector('.modal').append(modalDialog);
        
         setTimeout(() => {
            modalDialog.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }
}

module.exports = form;