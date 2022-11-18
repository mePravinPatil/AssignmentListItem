import React, { useState } from "react";

const KeyboardHandling = () => {

  const [enteredText, setEnteredText] = useState("");

  
  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      alert(`You have entered "${enteredText}"`);
    }
  };

  const keyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Escape") {
      const confirm = window.confirm("Are you sure want to clear this text?");

      if (confirm) {
        setEnteredText("");
      }
    }
  };

  return (
    <div>
      <input
        onKeyDown={keyDownHandler}
        onKeyUp={keyUpHandler}
        type="text"
        value={enteredText}
        onChange={(e) => setEnteredText(e.target.value)}
      />
    </div>
  );
};

export default KeyboardHandling;
