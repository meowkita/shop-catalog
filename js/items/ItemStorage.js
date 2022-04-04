import { sortById, sortByName, sortByCost } from './ItemSorters.js';
import { includesString } from './ItemFilters.js';

function ItemStorage() {
  this.items = [];

  this.sorters = new Map([
    ['id-asc', sortById()],
    ['id-desc', sortById(true)],
    ['name-asc', sortByName()],
    ['name-desc', sortByName(true)],
    ['cost-asc', sortByCost()],
    ['cost-desc', sortByCost(true)],
  ]);

  this.add = (name, cost) => {
    const newItem = {
      id: this.getGreatestId() + 1,
      name: name,
      cost: cost,
    };

    this.items.push(newItem);
  };

  this.remove = (id) => {
    this.items.forEach((item, index) => {
      if (item.id === id) this.items.splice(index, 1);
    });
  };

  this.getGreatestId = () => {
    let maxId = 0;
    for (let item of this.items) {
      if (item.id > maxId) maxId = item.id;
    }
    return maxId;
  };

  this.filterAndSort = (filter, sorterKey) => {
    const sorter = this.sorters.get(sorterKey);
    return this.items
      .filter(includesString(filter))
      .sort(sorter);
  };
}

const itemStorage = new ItemStorage();

export { itemStorage }