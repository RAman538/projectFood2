function tabs() {
    const tabsParent = document.querySelector('.tabcontainer'),
            tab = document.querySelectorAll('.tabcontent'),
            tabItemsParent = document.querySelector('.tabheader__items'),
            tabItem = tabItemsParent.querySelectorAll('.tabheader__item');

        const hiddenTabs = () => {
            tab.forEach(i => {
                i.classList.add('hide');
                i.classList.remove('show', 'fade');
            });

            tabItem.forEach(i => {
                i.classList.remove('tabheader__item_active');
            });
        };

        const showTabs = (i = 0) => {
            tab[i].classList.add('show', 'fade');
            tab[i].classList.remove('hide');
            tabItem[i].classList.add('tabheader__item_active');
        };

        const chooseStyleFood = () => {
            tabsParent.addEventListener('click', (e) => {
                const target = e.target;

                if (target && target.classList.contains('tabheader__item')) {
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

module.exports = tabs;