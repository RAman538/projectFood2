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

    const getResource = async (url) => {
        const resultGet = await fetch(url);

        if (!resultGet.ok) {
            throw new Error(`Couldn't feth ${url}, status: ${resultGet.status}`);
        } else {
            return await resultGet.json();
        }
    };

    getResource('http://localhost:3000/menu')  
            .then(data => {
                data.forEach(({img, altimg, title, descr, price}) => {
                    new menuCard(img, altimg, title, descr, price, '.menu .container', 'menu__item').render();
                });
            });
}

module.exports = cards;