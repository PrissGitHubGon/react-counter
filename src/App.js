//App.jss
import { useState } from "react";
import Counter from "./components/Counter";
import Decompte from "./components/Decompte";
import "./App.css";
import Reset from "./components/Reset";
import Header from "./components/Header";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Header />
      <section className="global-vector">
        <div className="vector">
          <Decompte counter={counter} setCounter={setCounter} />
          <div className="result">{counter}</div>

          <Counter counter={counter} setCounter={setCounter} />
        </div>
        <div className="reset">
          <Reset counter={counter} setCounter={setCounter} />
        </div>
      </section>
      <p className="text-end">
        Made with <strong>React </strong> at <strong>Le Reacteur</strong> by
        <strong>Priscillia</strong>
      </p>
    </div>
  );
};

export default App;
