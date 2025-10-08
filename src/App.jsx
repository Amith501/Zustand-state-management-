import React from "react";
import CounterStore from "./store/Zustand";

const Counter = () => {
  const { count, increase, decrease, reset } = CounterStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        🧮 Zustand Counter
      </h1>
      <div className="text-3xl font-semibold mb-6">
        Count: <span className="text-indigo-600">{count}</span>
      </div>

      <div className="flex gap-4">
        <button
          onClick={increase}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
        >
          +
        </button>
        <button
          onClick={decrease}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
        >
          -
        </button>
        <button
          onClick={reset}
          className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
