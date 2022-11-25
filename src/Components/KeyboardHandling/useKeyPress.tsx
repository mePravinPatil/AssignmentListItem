import React,{useEffect, useState} from "react";

export const useKeyPress = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = useState(false);

  type PropType = {
    key: string;
  };

  useEffect(() => {
    const downHandler = ({ key }: PropType) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    };

    const upHandler = ({ key }: PropType) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };

    window.addEventListener("keypress", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keypress", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey]);

  return keyPressed;
};