const spanPlaceholder = document.querySelector('form > span');
const search = document.querySelector('input[type="search"]');

const initialSpanText = spanPlaceholder.textContent;

search.addEventListener('focus', () => {
  spanPlaceholder.textContent = '';
});

search.addEventListener('blur', () => {
  spanPlaceholder.textContent = initialSpanText;
});

// The last input

const lastInput = document.querySelector(
  '.extra-info form input[type="search"]'
);
const lastSpan = document.querySelector('.extra-info form span');

const initialLastSpanText = lastSpan.textContent;

lastInput.addEventListener('focus', () => {
  lastSpan.textContent = '';
});

lastInput.addEventListener('blur', () => {
  lastSpan.textContent = initialLastSpanText;
});