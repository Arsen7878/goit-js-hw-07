const options = {
  inputRef: document.querySelector('input#name-input'),
  outputRef: document.querySelector('span#name-output'),
};

const outputValueRef = () => {
  const { inputRef, outputRef } = options;

  outputRef.textContent = inputRef.value;

  if (inputRef.value === '') {
    outputRef.textContent = 'незнакомец';
  }
};

options.inputRef.addEventListener('input', outputValueRef);
