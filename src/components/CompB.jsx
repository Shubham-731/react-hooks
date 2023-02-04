import CompC from "./CompC";
import { useContext } from "react";
import { CountContext } from "../App";

export default function CompB() {
  const countContext = useContext(CountContext);

  return (
    <>
      {/* <CompC /> */}
      <p>
        Count - <strong>{countContext.count}</strong>
      </p>
      <button onClick={() => countContext.dispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.dispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.dispatch("reset")}>Reset</button>
    </>
  );
}
