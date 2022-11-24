import React, { useEffect, useState, useReducer } from "react";
import "./KeyboardHandling.style.ts";
import List from "./List";

const list:string[] = ["Item One", "Item Two", "Item Three", "Item Four", "Item Five"];

const initialState = { selectedIndex: 0 };

const useKeyPress = (targetKey: string) => {
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

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey]);

  return keyPressed;
};

const reducer = (state:{selectedIndex:number}, action: any) => {
  
  switch (action.type) {
    case "arrowUp":
      return {
        selectedIndex:
          state.selectedIndex !== 0 ? state.selectedIndex - 1 : list.length - 1,
      };
    case "arrowDown":
      return {
        selectedIndex:
          state.selectedIndex !== list.length - 1 ? state.selectedIndex + 1 : 0,
      };
      case "End":
      return {
        selectedIndex:
          state.selectedIndex = list.length - 1,
      };
      case "Home":
      return {
        selectedIndex:
          state.selectedIndex = 0,
      };
    case "select":
      return { selectedIndex: action.payload };
    default:
      throw new Error();
  }
};

 
const KeyboardHandling = () => {
  const arrowUpPressed = useKeyPress("ArrowUp");
  const arrowDownPressed = useKeyPress("ArrowDown");
  const endPressed = useKeyPress("End");
  const homePressed = useKeyPress("Home");
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (arrowUpPressed) {
      dispatch({ type: "arrowUp" });
    }
  }, [arrowUpPressed]);

  useEffect(() => {
    if (arrowDownPressed) {
      dispatch({ type: "arrowDown" });
    }
  }, [arrowDownPressed]);

  useEffect(() => {
    if (endPressed) {
      dispatch({ type: "End" });
    }
  }, [endPressed]);

  useEffect(() => {
    if (homePressed) {
      dispatch({ type: "Home" });
    }
  }, [homePressed]);

  return (
    <List list={list} state={state} dispatch={dispatch}/>
  );
};

export default KeyboardHandling;
