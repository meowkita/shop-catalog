import { refresh } from './ItemRenderer.js';
import { itemStorage } from './ItemStorage.js';

function buildItem() {
  return function (item) {
    const tableRow = document.createElement('tr');
    const idNode = document.createElement('td');
    const nameNode = document.createElement('td');
    const costNode = document.createElement('td');
    const deleteNode = document.createElement('td');

    idNode.innerHTML = item.id;
    nameNode.innerHTML = item.name;
    costNode.innerHTML = item.cost;

    const deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = '⛌';
    deleteButton.onclick = () => {
      itemStorage.remove(item.id);
      refresh();
    };
    deleteNode.appendChild(deleteButton);

    idNode.classList.add('row-id');
    nameNode.classList.add('row-name');
    costNode.classList.add('row-cost');
    deleteNode.classList.add('row-delete');

    tableRow.appendChild(idNode);
    tableRow.appendChild(nameNode);
    tableRow.appendChild(costNode);
    tableRow.appendChild(deleteNode);

    return tableRow;
  }
}

export { buildItem }