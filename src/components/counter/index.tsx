import React from "react";
import type { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/store/features/counter";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())} className="btn btn-primary">
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        className="btn btn-danger"
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
