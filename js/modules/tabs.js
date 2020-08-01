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

export default tabs;