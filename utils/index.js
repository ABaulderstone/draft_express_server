const randomPair = (arr) => {
  if (arr.length < 1) return [];
  const copy = [...arr];
  const firstInd = Math.floor(Math.random() * copy.length);
  const [firstElement] = copy.splice(firstInd, 1);
  const secondIndex = Math.floor(Math.random() * copy.length);
  const [secondElement] = copy.splice(secondIndex, 1);
  return [firstElement, secondElement];
};

module.exports = {
  randomPair,
};
