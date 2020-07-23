function slider() {
    const offerSlider = document.querySelector('.offer__slider'),
        sliderCounter = document.querySelector('.offer__slider-counter'),
        counterCurrent = document.querySelector('#current'),
        counterTotal = document.querySelector('#total'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = slidesWrapper.querySelector('.offer__slider-inner'),
        slides = slidesWrapper.querySelectorAll('.offer__slide'),
        sliderPrev = sliderCounter.querySelector('.offer__slider-prev'),
        sliderNext = sliderCounter.querySelector('.offer__slider-next'),
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

module.exports = slider;