const inputRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createBoxes(amount) {
  const initialSize = 30;
  const step = 10;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const size = initialSize + step * i;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesRef.append(...boxes);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}

createBtnRef.addEventListener('click', () => {
  const amount = Number(inputRef.value.trim());
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputRef.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

destroyBtnRef.addEventListener('click', destroyBoxes);
