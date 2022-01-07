import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";
//import { CounterReducerComponent } from "./bases/CounterReducerComponent";
import { CounterReducerComponent } from "../src/counter-reducer/CounterReducerComponent";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr/>
      <Counter initialValue={0}/>
      <hr/>
      <CounterBy/>
      <hr/>
      <CounterEffect />
      <CounterEffect />
      <hr/>
      <CounterHook />
      <hr />
      {/* <CounterReducerComponent />
      <hr /> */}
      <CounterReducerComponent />
    </>
  );
}

export default App;
