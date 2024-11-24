const draggable = document.getElementById('draggable');
const grayBox = draggable.parentElement;
const grayBoxRect = grayBox.getBoundingClientRect();

let isDragging = false;

draggable.addEventListener('mousedown', (event) => {
    isDragging = true;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (event) => {
    if (!isDragging) return;

    const mouseX = event.clientX - grayBoxRect.left;
    

    let left = mouseX - (draggable.offsetWidth / 2); 
    if (left < 0) left = 0; 
    if (left > (grayBoxRect.width - draggable.offsetWidth)) {
        left = grayBoxRect.width - draggable.offsetWidth; 
    }

    draggable.style.left = `${left}px`; 
});
