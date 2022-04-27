const Reset = (props) => {
  return (
    <div className="resets">
      <button
        onClick={() => {
          props.setCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Reset;
