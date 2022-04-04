import { itemStorage } from '../items/ItemStorage.js';

const nameInput = document.getElementById('new-item-name');
const costInput = document.getElementById('new-item-cost');
const createButton = document.getElementById('new-item-create');

createButton.addEventListener('click', () => {
  const name = nameInput.value;
  const cost = costInput.value;

  if (!name || !cost) return;
  if (cost < 1) return;
  
  itemStorage.add(name, cost);

  nameInput.value = '';
  costInput.value = '';
});

export { createButton }