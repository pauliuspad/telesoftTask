const PF = require("pathfinding");

const findingPath = (gridArray, startEndPoints) => {
  const newGridArray = generateValue2dArray(gridArray);
  const grid = new PF.Grid(newGridArray);
  const finder = new PF.AStarFinder();
  const path = finder.findPath(
    0,
    startEndPoints.startPoint,
    newGridArray[0].length - 1,
    startEndPoints.endPoint,
    grid
  );
  return path;
};

const generateValue2dArray = (array) => {
  const newArray = Array(array.length)
    .fill()
    .map(() => Array(array[0].length));
  array.map((values, y) =>
    values.map((value, x) => (newArray[y][x] = value.value))
  );
  return newArray;
};

export { findingPath, generateValue2dArray };
