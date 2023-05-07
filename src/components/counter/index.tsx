import React from "react";
// redux
import type { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/store/features/counter";

const TestCounter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Test Counter: {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
        className="btn btn-success me-3"
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        className="btn btn-danger"
      >
        -
      </button>
    </>
  );
};

export default TestCounter;
