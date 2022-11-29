import React, { useEffect, useState, useCallback } from "react";


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
    // const { key, keyCode } = event;
    // if(keyCode === 32 || (keyCode >= 65 && keyCode <= 90)){
    //     setUserText(``);

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

// const [userText, setUserText] = useState("");
// export const useKeyPress = useCallback((event:any) => {
//   console.log(event)
//     const { key, keyCode } = event;
//     if(keyCode === 32 || (keyCode >= 65 && keyCode <= 90)){
//         setUserText(``);
//     }
// }, []);

// useEffect(() => {
//     window.addEventListener("keydown", useKeyPress);
//     return () => {
//         window.removeEventListener("keydown", useKeyPress);
//     };
// }, [useKeyPress]);
