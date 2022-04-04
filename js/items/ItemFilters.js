function includesString(substring) {
  return function (item) {
    const normalizedSubstring = substring.toLowerCase();
    const normalizedItemName = item.name.toLowerCase();
    return normalizedItemName.indexOf(normalizedSubstring) > -1;
  }
}

export { includesString }