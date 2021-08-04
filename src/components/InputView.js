import NumberInput from "./NumberInput.js";

function InputView(props) {
  return (
    <div className="input-view">
      <div className="input-fields">
        <div className="input-field">
          <label className="input-label">Rows</label>
          <NumberInput id="rows" />
        </div>
        <div className="text-x">X</div>
        <div className="input-field">
          <label className="input-label">Columns</label>
          <NumberInput id="columns" />
        </div>
      </div>
      <button className="generate-button" onClick={props.generateButtonClick}>
        Generate
      </button>
    </div>
  );
}
export default InputView;
