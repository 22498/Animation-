let menuItems = [];
for (let i = 1; i <= 5; i++) {
    menuItems[i] = document.querySelector('#box' + i);
}


const slide = () => {
    let button = document.querySelector('#button-text');
    for (let i = 1; i <= 5; i++) {
        menuItems[i].classList.toggle('box--slide-out');
    }
}
