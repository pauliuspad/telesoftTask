function GridLayout(props) {
  const gridArray = props.gridArray;
  return (
    <div className="grid">
      {gridArray.map((values, y) =>
        values.map((object, x) => (
          <div
            className={object.className}
            key={`${y} - ${x}`}
            id={`${y} - ${x}`}
            onClick={props.onClick}
          ></div>
        ))
      )}
    </div>
  );
}
export default GridLayout;
