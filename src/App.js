import "./styles/index.sass";
import React, { useEffect, useState } from "react";

import GridLayout from "./components/GridLayout.js";
import InputView from "./components/InputView.js";
import HeaderView from "./components/HeaderView.js";

import { validation } from "./services/validators.js";
import { findingPath } from "./services/pathFinding.js";
import {
  generateRandomNumber,
  generate2dArray,
  getFilledGrid,
  removePath,
  checkIfStartOrEndPoint,
} from "./services/gridHelpers.js";

function App() {
  const DEFAULT_COLUMNS = 10;
  const DEFAULT_ROWS = 10;
  const DEFAULT_MAX_COLUMNS = 20;
  const DEFAULT_MAX_ROWS = 20;
  const DEFAULT_MIN_COLUMNS = 3;
  const DEFAULT_MIN_ROWS = 1;
  const [rows, setRows] = useState(DEFAULT_ROWS);
  const [columns, setColumns] = useState(DEFAULT_COLUMNS);
  const [startEndPoints, setStartEndPoints] = useState({
    startPoint: 1,
    endPoint: 1,
  });
  const [gridArray, setGridArray] = useState([]);
  document.documentElement.style.setProperty("--colum-number", columns);

  function setGridStartEndPoints(gridArray) {
    gridArray[startEndPoints.startPoint][0].value = 0;
    gridArray[startEndPoints.startPoint][0].className = "grid-starting-point";
    gridArray[startEndPoints.endPoint][gridArray[0].length - 1].value = 0;
    gridArray[startEndPoints.endPoint][gridArray[0].length - 1].className =
      "grid-end-point";
    return gridArray;
  }

  function handleButtonClick() {
    const columnsInput = validation(
      parseInt(document.getElementById("columns").value, 10),
      DEFAULT_MIN_COLUMNS,
      DEFAULT_MAX_COLUMNS
    );
    const rowsInput = validation(
      parseInt(document.getElementById("rows").value, 10),
      DEFAULT_MIN_ROWS,
      DEFAULT_MAX_ROWS
    );
    createGrid(rowsInput, columnsInput);
  }

  function createGrid(
    rowsInput = DEFAULT_ROWS,
    columnsInput = DEFAULT_COLUMNS
  ) {
    setInputFields(rowsInput, columnsInput);
    setRows(rowsInput);
    setColumns(columnsInput);
    setStartEndPoints({
      startPoint: generateRandomNumber(rowsInput),
      endPoint: generateRandomNumber(rowsInput),
    });
  }

  function setInputFields(rows, columns) {
    document.getElementById("rows").value = rows;
    document.getElementById("columns").value = columns;
  }

  function handleFieldClick(item) {
    const fieldCoordinates = item.target.id
      .split("-")
      .map((number) => parseInt(number));

    if (checkIfStartOrEndPoint(fieldCoordinates, startEndPoints, columns)) {
      return;
    }

    const arrayClone = [...gridArray];
    const fieldValue =
      arrayClone[fieldCoordinates[0]][fieldCoordinates[1]].value;
    const is_one = fieldValue === 1 ? 1 : 0;

    arrayClone[fieldCoordinates[0]][fieldCoordinates[1]].value = !is_one * 1;
    arrayClone[fieldCoordinates[0]][fieldCoordinates[1]].className = is_one
      ? "grid-clear"
      : "grid-down";

    setGridArray(arrayClone);
    const foundPath = findingPath(gridArray, startEndPoints);
    if (foundPath.length > 0) {
      setGridArray(getFilledGrid(foundPath, gridArray));
    } else {
      removePath(gridArray);
    }
  }

  useEffect(() => {
    setGridArray(setGridStartEndPoints(generate2dArray(rows, columns)));
  }, [startEndPoints]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    createGrid();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <HeaderView />
      <div>
        <InputView generateButtonClick={handleButtonClick} />
        <GridLayout gridArray={gridArray} onClick={handleFieldClick} />
      </div>
    </div>
  );
}

export default App;
