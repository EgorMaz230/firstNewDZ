// const parent = document.getElementById('parent')
// const child = document.getElementById('child')
// const descendant = document.getElementById('descendant')
// descendant.addEventListener('click', () => {
//     alert('descendant')
// })
// parent.addEventListener('click', () => {
//     alert('parent')
// })
// child.addEventListener('click', () => {
//     alert('child')
// })
let output = document.querySelector('.output');
let colorPalette = document.querySelector('.colorPalette');

colorPalette.addEventListener('click', colorSelector);

function colorSelector(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }
    let colorSelected = e.target.getAttribute('data-color');
    output.innerHTML = `${colorSelected} - ви обрали колір;`;
    output.style.color = colorSelected;
}

function colorCreate() {
    let items = [];
    for (let i = 0; i < 60; i++) {
        const randomColor = getRandomColor();
        let button = document.createElement('button');
        button.type = 'button';
        button.dataset.color = randomColor;
        button.style.backgroundColor = randomColor;
        button.classList.add('element');
        items.push(button);
    }
    colorPalette.append(...items);
}

function getRandomColor() {
    return `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;
}

function getRandomValue() {
    return Math.floor(Math.random() * 256);
}

colorCreate();

