import { filterString, sortRule } from '../forms/SearchForm.js';
import { itemStorage } from './ItemStorage.js';
import { buildItem } from './ItemBuilder.js';

const itemsList = document.getElementById('items-list');

export function refresh() {
  const nodes = itemStorage
    .filterAndSort(filterString, sortRule)
    .map(buildItem());

  itemsList.replaceChildren(...nodes);
}