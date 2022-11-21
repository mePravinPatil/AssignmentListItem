import React from "react";
import "./KeyboardHandling.css";

type ArrayProps = {
  listArrayItems: string[];
};

const KeyboardHandling = ({ listArrayItems }: ArrayProps) => {

  return (
    <div>
      <ul>
        {listArrayItems.map((e, key) => {
          return <li tabIndex={0} key={key}>{e}</li>
        })}
      </ul>
    </div>
  );
};

export default KeyboardHandling;
