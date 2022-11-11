const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    const item = document.createElement('div');

    item.addEventListener('mouseover', () => {
        item.style.background = '#444';
    })

    container.appendChild(item);
}