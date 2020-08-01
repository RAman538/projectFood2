/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc() {
    const result = document.querySelector('.calculating__result span');

    let sex, height, weight, age, ratio;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    function initLocalSetting(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);

            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }

            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSetting('#gender div', 'calculating__choose-item_active');
    initLocalSetting('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '____';
            return;
        }

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function getStaticInformation(parentSelector, activeClass) {
        const elements = document.querySelectorAll(`${parentSelector} div`);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }
    
                
    
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
    
                e.target.classList.add(activeClass);
    
                calcTotal();
            });
        });
    }

    getStaticInformation('#gender', 'calculating__choose-item_active');

    getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');


    function getDinamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
                
            } else {
                input.style.border = 'none';
            }

            switch (input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
            }

            calcTotal();
        });

    }

    getDinamicInformation('#height');
    getDinamicInformation('#weight');
    getDinamicInformation('#age');
}

/* harmony default export */ __webpack_exports__["default"] = (calc); 

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {
    class menuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 28; // это курс доллара - гривны для ф-ции обмена
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.classes = 'menu__item';
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
                
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
            `;

            this.parent.append(element);
        }

    }

    Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])('http://localhost:3000/menu')  
            .then(data => {
                data.forEach(({img, altimg, title, descr, price}) => {
                    new menuCard(img, altimg, title, descr, price, '.menu .container', 'menu__item').render();
                });
            });
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function form(formSelector, modalSelector, setTimeShowModal) {

    const forms = document.querySelectorAll(formSelector);
    
        const message = {
            loading: 'img/form/spinner.svg',
            success: 'Мы скоро перезвоним',
            failure: 'Что то пошло не так...'
        };
    
        forms.forEach(item => {
            bindPostData(item);
        });
      
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

            Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', jeson) 
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
        Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])(modalSelector, setTimeShowModal);

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
            Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(modalSelector);
        }, 4000);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default, openModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
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

/* harmony default export */ __webpack_exports__["default"] = (modal);


// export {showModalByScroll};

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider({container, wrapper, currentCounter, totalCounter, field, slide, arrowPrev, arrowNext}) {
    const offerSlider = document.querySelector(container),
        counterCurrent = document.querySelector(currentCounter),
        counterTotal = document.querySelector(totalCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = slidesWrapper.querySelector(field),
        slides = slidesWrapper.querySelectorAll(slide),
        sliderPrev = document.querySelector(arrowPrev),
        sliderNext = document.querySelector(arrowNext),

        width = window.getComputedStyle(slidesWrapper).width; 

    // dots  
    const indicator = document.createElement('ol');
      
    const dots = [];

    offerSlider.style.position = 'relative';
    indicator.classList.add('carousel-indicators');
    offerSlider.append(indicator);
    
    const totalSlides = slides.length;


    function createDots(i) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1); 
        dot.classList.add('dot');
        indicator.append(dot);
        dots.push(dot); 

        if (i == 0) {
            dot.style.opacity = 1;
        }
    }

    for (let i = 0; i < totalSlides; i++) {
        createDots(i);
    }
       
    let slideIndex = 1;

    let offset = 0; 

    if (slides.length < 10) {

        counterCurrent.textContent = `0${slideIndex}`;
        counterTotal.textContent = `0${slides.length}`;
    } else {
        counterCurrent.textContent = slideIndex;
        counterTotal.textContent = slideIndex.length;
    }


    slidesField.style.width = 100 * slides.length + '%'; 

    slidesField.style.display = 'flex'; 

    slidesWrapper.style.overflow = 'hidden'; 

    slidesField.style.transition = '0.5s all'; 

    slides.forEach(slide => {  
        slide.style.width = width;
    });

    const activeDot = () => {
        dots.forEach(dot => dot.style.opacity = '.5'); 
        dots[slideIndex - 1].style.opacity = 1;
    };

    const setCounterValue = () => {
        if(slideIndex < 10) {
            counterCurrent.textContent = `0${slideIndex}`;
        } else {
            counterCurrent.textContent = slideIndex;
        }
    };

    const transformWidth = (val) => +val.replace(/\D/g , '');

    sliderNext.addEventListener('click', () => {

        if (offset == transformWidth(width) * (slides.length - 1)) {
            offset = 0;  
        } else {
            offset += transformWidth(width); 
        }

        slidesField.style.transform = `translateX(-${offset}px)`; 

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        setCounterValue();

        activeDot();
    });


    sliderPrev.addEventListener('click', () => {
    
        if (offset == 0) {

            offset = transformWidth(width) * (slides.length - 1);
        } else {

            offset -= transformWidth(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        setCounterValue();

        activeDot();
    });

    dots.forEach(dot => {  
        dot.addEventListener('click', (e) => { 
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo; 
            offset = transformWidth(width) * (slideTo - 1); 

            slidesField.style.transform = `translateX(-${offset}px)`; 

            setCounterValue();

           activeDot(); 
        });
    });
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tab = document.querySelectorAll(tabsContentSelector),
        tabItemsParent = document.querySelector(tabsParentSelector),
        tabItem = document.querySelectorAll(tabsSelector);

        const hiddenTabs = () => {
            tab.forEach(i => {
                i.classList.add('hide');
                i.classList.remove('show', 'fade');
            });

            tabItem.forEach(i => {
                i.classList.remove(activeClass);
            });
        };

        const showTabs = (i = 0) => {
            tab[i].classList.add('show', 'fade');
            tab[i].classList.remove('hide');
            tabItem[i].classList.add(activeClass);
        };

        const chooseStyleFood = () => {
            tabItemsParent.addEventListener('click', (e) => {
                const target = e.target;

                if (target && target.classList.contains(tabsSelector.slice(1))) {
                    tabItem.forEach((item, i ) => {
                        if (item == target) {
                            hiddenTabs();
                            showTabs(i);
                        }
                    });
                }
            });
        };

        hiddenTabs();
        showTabs();
        chooseStyleFood();
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(id, start) {

        function getTimeRemaining(begin) {

            const t = Date.parse(begin) - Date.parse(new Date()),
                  days = Math.floor(t/ (1000 * 60 * 60 * 24)),
                  hours = Math.floor((t/ (1000 * 60 * 60)) %24),
                  minutes = Math.floor((t/ (1000 * 60)) %60),
                  seconds = (t/ (1000)) %60;

            return {
                t,
                days,
                hours,
                minutes,
                seconds
            };
        }

        function getZero(num) {

            if (num > 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }

        function setClock(selector, begin) {

            const timer = document.querySelector(selector),
                  days = timer.querySelector('#days'),
                  hours = timer.querySelector('#hours'),
                  minutes = timer.querySelector('#minutes'),
                  seconds = timer.querySelector('#seconds'),
                  timeInterval = setInterval(updateClock, 1000);

                updateClock();

            function updateClock() {

                const t = getTimeRemaining(begin);

                days.textContent = getZero(t.days);
                hours.textContent = getZero(t.hours);
                minutes.textContent = getZero(t.minutes);
                seconds.textContent = getZero(t.seconds);

                        if (t.t <= 0) {

                            clearInterval(timeInterval);

                            days.textContent = '88';
                            hours.textContent = '88';
                            minutes.textContent = '88';
                            seconds.textContent = '88';
                        }
            }

        }
        setClock(id, start);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
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

async function getResource(url) {
    const resultGet = await fetch(url);

    if (!resultGet.ok) {
        throw new Error(`Couldn't feth ${url}, status: ${resultGet.status}`);
    } else {
        return await resultGet.json();
    }
}




/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _js_modules_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _js_modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _js_modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../js/modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _js_modules_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../js/modules/form */ "./js/modules/form.js");
/* harmony import */ var _js_modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../js/modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _js_modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../js/modules/calc */ "./js/modules/calc.js");








//import {showModalByScroll} from '../../js/modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const setTimeShowModal = setTimeout(() => { // функция открытия модального окна через некоторое время
        Object(_js_modules_modal__WEBPACK_IMPORTED_MODULE_2__["openModal"])('.modal', setTimeShowModal);
    }, 80000); 

    Object(_js_modules_timer__WEBPACK_IMPORTED_MODULE_0__["default"])('.timer', '2020-08-24');
    Object(_js_modules_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    Object(_js_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-modalBut]', '.modal', setTimeShowModal);
    Object(_js_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(_js_modules_form__WEBPACK_IMPORTED_MODULE_4__["default"])('form', '.modal', setTimeShowModal);
    Object(_js_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
        container: '.offer__slider',
        wrapper: '.offer__slider-wrapper',
        currentCounter: '#current',
        totalCounter: '#total',
        field: '.offer__slider-inner',
        slide: '.offer__slide',
        arrowPrev: '.offer__slider-prev',
        arrowNext: '.offer__slider-next',
    });

    Object(_js_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])();

   // showModalByScroll('.modal', setTimeShowModal); // функция показа модального окна при скроле в низ страницы
    
    
});




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map