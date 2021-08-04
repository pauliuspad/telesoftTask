function NumberInput(props) {
  const id = props.id;
  return (
    <input
      type="number"
      pattern="[0-9]*"
      id={id}
      onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}
    />
  );
}
export default NumberInput;
