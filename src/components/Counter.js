const Counter = (props) => {
  return (
    <div className="counter">
      <button
        onClick={() => {
          props.setCounter(props.counter + 1);
        }}
      >
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default Counter;
