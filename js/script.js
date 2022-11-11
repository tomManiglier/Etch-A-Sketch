const container = document.querySelector('.container');
const colorInput = document.querySelector('.color');


for (let i = 0; i < 256; i++) {
    const item = document.createElement('div');

    item.addEventListener('mouseover', () => {
        let color = colorInput.value;
        item.style.background = color;
    });

    container.appendChild(item);
}