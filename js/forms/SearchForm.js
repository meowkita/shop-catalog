const filterInput = document.getElementById('name-filter');
const sortSelect = document.getElementById('sort-rule');

let filterString = '';
let sortRule = '';

filterInput.addEventListener('input', () => filterString = filterInput.value);
sortSelect.addEventListener('change', () => sortRule = sortSelect.options[sortSelect.selectedIndex].value);

export { filterString, sortRule, filterInput, sortSelect }