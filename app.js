const h1 = document.querySelector('.color-change');
h1.innerHTML = h1.textContent
  .split('')
  .map(letter => `<span>${letter}</span>`).join('');
