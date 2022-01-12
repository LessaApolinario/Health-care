const spanPlaceholder = document.querySelector('form > span');
const search = document.querySelector('input[type="search"]');

const initialSpanText = spanPlaceholder.textContent;

search.addEventListener('focus', () => {
  spanPlaceholder.textContent = '';
});

search.addEventListener('blur', () => {
  spanPlaceholder.textContent = initialSpanText;
});