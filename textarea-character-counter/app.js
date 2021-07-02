const textarea = document.querySelector('textarea');
const divHint = document.querySelector('.hint');
const spanHint = document.querySelector('.hint span');

spanHint.innerText = textarea.maxLength;

textarea.addEventListener('input', () => {
  const remainingChars = textarea.maxLength - textarea.value.length;
  spanHint.innerText = remainingChars;

  if(remainingChars <= 5) {
    divHint.classList.add('warning');
  } else {
    divHint.classList.remove('warning');
  }
});