const getFilledGrid = (path, gridArray) => {
  let defaultdArray = removePath(gridArray);
  path.shift();
  path.pop();
  path.forEach((val) => {
    defaultdArray[val[1]][val[0]].className = "grid-shortest-path";
  });
  return defaultdArray;
};

const removePath = (currentGrid) => {
  let arrayCopy = [...currentGrid];
  arrayCopy.map((values, y) => {
    values.map((object, x) => {
      if (object.className === "grid-shortest-path") {
        object.className = "grid-clear";
      }
    });
  });
  return arrayCopy;
};

const generateRandomNumber = (limit) => {
  return Math.floor(Math.random() * limit);
};

const generate2dArray = (rowsNumber, columnsNumber) => {
  return new Array(rowsNumber)
    .fill()
    .map(() =>
      new Array(columnsNumber)
        .fill()
        .map(() => ({ value: 1, className: "grid-default" }))
    );
};

const checkIfStartOrEndPoint = (coordinates, startEndPoints, columnsNumber) => {
  return (coordinates[1] === 0 &&
    coordinates[0] === startEndPoints.startPoint) ||
    (coordinates[1] === columnsNumber - 1 &&
      coordinates[0] === startEndPoints.endPoint)
    ? 1
    : 0;
};

export {
  getFilledGrid,
  removePath,
  generateRandomNumber,
  generate2dArray,
  checkIfStartOrEndPoint,
};
