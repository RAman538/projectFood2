import timer from '../../js/modules/timer';
import tabs from '../../js/modules/tabs';
import modal from '../../js/modules/modal';
import cards from '../../js/modules/cards';
import form from '../../js/modules/form';
import slider from '../../js/modules/slider';
import calc from '../../js/modules/calc';
import {openModal} from '../../js/modules/modal';
//import {showModalByScroll} from '../../js/modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const setTimeShowModal = setTimeout(() => { // функция открытия модального окна через некоторое время
        openModal('.modal', setTimeShowModal);
    }, 80000); 

    timer('.timer', '2020-08-24');
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modalBut]', '.modal', setTimeShowModal);
    cards();
    form('form', '.modal', setTimeShowModal);
    slider({
        container: '.offer__slider',
        wrapper: '.offer__slider-wrapper',
        currentCounter: '#current',
        totalCounter: '#total',
        field: '.offer__slider-inner',
        slide: '.offer__slide',
        arrowPrev: '.offer__slider-prev',
        arrowNext: '.offer__slider-next',
    });

    calc();

   // showModalByScroll('.modal', setTimeShowModal); // функция показа модального окна при скроле в низ страницы
    
    
});


