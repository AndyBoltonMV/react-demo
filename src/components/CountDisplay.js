function CountDisplay(props) {
  return (
    <div>
      <h3>{props.count}</h3>
      <button onClick={() => props.setCount(0)}>Reset</button>
    </div>
  );
}

export default CountDisplay;
