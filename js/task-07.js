const options = {
  inputRef: document.querySelector('input#font-size-control'),
  textRef: document.querySelector('#text'),
};
const { inputRef, textRef } = options;
const controlFontSizeRef = () => {
  const { value } = inputRef;
  const { style } = textRef;
  style.fontSize = value + 'px';
};
inputRef.addEventListener('input', controlFontSizeRef);
