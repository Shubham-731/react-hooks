import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countSec, dispatchSec] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <p>
          Counter First - <strong>{count}</strong>
        </p>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
      <div>
        <p>
          Count Second - <strong>{countSec}</strong>
        </p>
        <button onClick={() => dispatchSec("increment")}>Increment</button>
        <button onClick={() => dispatchSec("decrement")}>Decrement</button>
        <button onClick={() => dispatchSec("reset")}>Reset</button>
      </div>
    </div>
  );
}
