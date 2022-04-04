import { itemStorage } from '../items/ItemStorage.js';
import { refresh } from '../items/ItemRenderer.js';

const loadMockItemsButton = document.getElementById('load-mock-items'); 

loadMockItemsButton.onclick = () => {
  itemStorage.items = [
    {
      id: 1,
      name: 'Shrimps',
      cost: 25,
    },
    {
      id: 2,
      name: 'Kiwi',
      cost: 5,
    },
    {
      id: 3,
      name: 'Cheetos',
      cost: 15,
    },
    {
      id: 4,
      name: 'Pumpkin pie',
      cost: 20,
    },
    {
      id: 5,
      name: 'Bread',
      cost: 5,
    },
    {
      id: 6,
      name: 'Banana bread',
      cost: 10,
    },
    {
      id: 7,
      name: 'Doritos',
      cost: 999,
    },
    {
      id: 8,
      name: 'Corn',
      cost: 5,
    },
    {
      id: 9,
      name: 'Mango',
      cost: 15,
    },
    {
      id: 10,
      name: 'Pizza',
      cost: 35,
    },
    {
      id: 11,
      name: 'Eggs',
      cost: 15,
    },
    {
      id: 12,
      name: 'Lasagna',
      cost: 25,
    },
  ];

  refresh();
};