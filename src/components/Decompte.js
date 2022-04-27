const Decompte = (props) => {
  return (
    <div className="decompte">
      <button
        onClick={() => {
          props.setCounter(props.counter - 1);
        }}
      >
        <i class="fa-solid fa-minus"></i>
      </button>
    </div>
  );
};

export default Decompte;
