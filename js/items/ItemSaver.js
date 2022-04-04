import { createButton } from '../forms/AddForm.js';
import { refresh } from './ItemRenderer.js';
import { itemStorage } from './ItemStorage.js';

window.onload = () => {
  loadItems();
  createButton.addEventListener('click', saveItems);
};

window.onbeforeunload = () => {
  saveItems();
};

function loadItems() {
  const jsonItems = localStorage.getItem('items');
  itemStorage.items = JSON.parse(jsonItems);
  refresh();
}

function saveItems() {
  const jsonItems = JSON.stringify(itemStorage.items);
  localStorage.setItem('items', jsonItems);
}