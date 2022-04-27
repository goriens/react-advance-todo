import { useState } from "react";

export const TodoInput = ({ addItem }) => {
  const [inputData, setInputData] = useState("");
  return (
    <div className="input-box">
      <button
        className="input-btn"
        onClick={() => {
          addItem(inputData);
        }}
      >
        +
      </button>
      <input
        type="text"
        placeholder="Type something"
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
    </div>
  );
};
