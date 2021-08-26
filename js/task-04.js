const options = {
  valueRef: document.querySelector('#value'),
  btnIncrementEl: document.querySelector('[data-action="increment"]'),
  btnDecrementEl: document.querySelector('[data-action="decrement"]'),
};

const { valueRef, btnIncrementEl, btnDecrementEl } = options;

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

btnIncrementEl.addEventListener('click', increment);
btnDecrementEl.addEventListener('click', decrement);
