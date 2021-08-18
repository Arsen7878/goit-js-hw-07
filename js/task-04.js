let counterValue = 0;

const increment = () => {
  const a = document.querySelector('#value');
  counterValue += 1;
  a.textContent = counterValue;
};
const decrement = () => {
  const a = document.querySelector('#value');
  counterValue -= 1;
  a.textContent = counterValue;
};

const btnIncrementEl = document.querySelector('[data-action="increment"]');
const btnDecrementEl = document.querySelector('[data-action="decrement"]');
btnIncrementEl.addEventListener('click', increment);
btnDecrementEl.addEventListener('click', decrement);
