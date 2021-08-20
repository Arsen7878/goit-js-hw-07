const options = {
  inputRef: document.querySelector('#controls input'),
  destroyRef: document.querySelector('Button[data-action="destroy"]'),
  renderRef: document.querySelector('Button[data-action="render"]'),
  boxesRef: document.querySelector('#boxes'),
};

const { inputRef, destroyRef, renderRef, boxesRef } = options;
const createBoxes = (amount) => {
  amount = inputRef.value;

  for (let i = 0; i < amount; i += 1) {
    boxesRef.insertAdjacentHTML('beforeend', '<div></div>');
    const divRef = document.querySelectorAll('#boxes div');
    let basicSize = 20;

    divRef.forEach((elem) => {
      basicSize += 10;
      elem.style.height = `${basicSize}${'px'}`;
      elem.style.width = `${basicSize}${'px'}`;
      elem.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * (255 - 0) + 0
      )},${Math.floor(Math.random() * (255 - 0) + 0)},${Math.floor(
        Math.random() * (255 - 0) + 0
      )})`;
    });
  }
};

const destroyBoxes = () => {
  boxesRef.innerHTML = '';
  inputRef.value = '';
};

renderRef.addEventListener('click', createBoxes);
destroyRef.addEventListener('click', destroyBoxes);

// ! А ЭТО Я НАШЕЛ НА ПРОСТОРАХ ИНТЕРНЕТА
// var render = document.querySelector('[data-action="render"]');
// var destroy = document.querySelector('[data-action="destroy"]');
// var boxes = document.getElementById('boxes');
// render.addEventListener('click', getAmount);
// destroy.addEventListener('click', destroyBoxes);

// function getAmount() {
//   var amount = +document.querySelector('#controls input').value;
//   createBoxes(amount);
// }

// function createBoxes(amount) {
//   var basicSize = 30;
//   var fragment = document.createDocumentFragment();
//   for (var i = 0; i < amount; i++) {
//     var size = basicSize + i * 10;
//     var div = document.createElement('div');
//     div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
//     fragment.appendChild(div);
//   }
//   boxes.appendChild(fragment);
// }

// function destroyBoxes() {
//   boxes.innerHTML = '';
// }

// function random() {
//   return Math.floor(Math.random() * 256);
// }
