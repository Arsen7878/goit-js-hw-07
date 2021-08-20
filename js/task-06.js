// const inputRef = document.querySelector('#validation-input');
// const getDataLength = Number(inputRef.getAttribute('data-length'));
// const options = {
//   inputRef: document.querySelector('#validation-input'),
//   getDataLength: Number(inputRef.getAttribute('data-length')),
// };
// inputRef.addEventListener('input', () => {
//   const { inputRef, getDataLength } = options;
//   inputRef.classList.add('invalid');
//   if (inputRef.value.length === getDataLength) {
//     inputRef.classList.replace('invalid', 'valid');
//   } else {
//     inputRef.classList.replace('valid', 'invalid');
//   }
// });

const inputRef = document.querySelector('#validation-input');
const getDataLength = Number(inputRef.getAttribute('data-length'));
const options = {
  inputRef: document.querySelector('#validation-input'),
  getDataLength: Number(inputRef.getAttribute('data-length')),
};
inputRef.addEventListener('blur', () => {
  const { inputRef, getDataLength } = options;
  inputRef.classList.add('invalid');
  if (inputRef.value.length === getDataLength) {
    inputRef.classList.replace('invalid', 'valid');
  } else {
    inputRef.classList.replace('valid', 'invalid');
  }
});
