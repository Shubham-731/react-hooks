import axios from "axios";
import { useReducer, useEffect } from "react";

const initialState = {
  loading: true,
  payload: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        payload: action.payload,
        error: "",
      };

    case "FETCH_FAILURE":
      return {
        loading: false,
        payload: {},
        error: "Something wen't wrong!",
      };

    default:
      return state;
  }
};

export default function DataFetching() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (res.status === 200) {
          dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        }
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE" });
      }
    };

    getData();
  }, []);

  return (
    <div>
      {state.loading && "Loading..."}
      {state.payload && <p>{state.payload.title}</p>}
    </div>
  );
}
