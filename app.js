const boxEl = document.querySelector('#box');

boxEl.addEventListener('mouseenter', () => {
    if (!boxEl.classList.contains('hover')) {
        boxEl.classList.add('hover');
    }
})

boxEl.addEventListener('mouseleave', () => {
    if (boxEl.classList.contains('hover')) {
        boxEl.classList.remove('hover');
    }
})