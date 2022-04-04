function sortById(isDescending) {
  return function (first, second) {
    return isDescending ?
      second.id - first.id :
      first.id - second.id;
  }
}

function sortByName(isDescending) {
  return function (first, second) {
    return isDescending ?
      second.name.localeCompare(first.name) :
      first.name.localeCompare(second.name);
  }
}

function sortByCost(isDescending) {
  return function (first, second) {
    return isDescending ?
      second.cost - first.cost :
      first.cost - second.cost;
  }
}

export { sortById, sortByName, sortByCost }