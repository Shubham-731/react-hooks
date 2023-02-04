import React from "react";
import CompA from "./components/CompA";
import CompB from "./components/CompB";
import CounterOne from "./components/CounterOne";
import CounterThree from "./components/CounterThree";
import CounterTwo from "./components/CounterTwo";
import { useReducer } from "react";
import DataFetching from "./components/DataFetching";

export const UserContext = React.createContext();
export const SubContext = React.createContext();
export const CountContext = React.createContext();

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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={"Anonymous"}>
      <SubContext.Provider value="Free">
        <CountContext.Provider value={{ count, dispatch }}>
          {/* <p>
            Count - <strong>{count}</strong>
          </p>
          <CompB /> */}
          {/* <CompA /> */}
          {/* <CounterOne /> */}
          {/* <CounterTwo /> */}
          {/* <CounterThree /> */}
          <DataFetching />
        </CountContext.Provider>
      </SubContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
