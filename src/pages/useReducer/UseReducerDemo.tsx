import { useReducer } from "react";
import { Button } from "antd";

function reducer(state: number, action: { type: string }) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      if (state === 0) return state;
      return state - 1;
    default:
      throw new Error();
  }
}

function renderMessage(state: number) {
  if (state === 0) {
    return "state 为0，不能再减了";
  } else {
    return "";
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      {/* <h1>这个展示的是 useReducer 示例</h1> */}
      <div>{state}</div>
      <Button onClick={() => dispatch({ type: "increment" })}>+</Button>
      <Button onClick={() => dispatch({ type: "decrement" })}>-</Button>
      <div>{renderMessage(state)}</div>
    </div>
  );
};

export default Counter;
