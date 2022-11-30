import React, { useEffect, useState, useReducer } from "react";
import "./KeyboardHandling.style.ts";
import List from "./List";
import { useKeyPress } from "./useKeyPress";

const list: string[] = [
  "Item One",
  "Item Two",
  "Item Three",
  "Item Four",
  "Item Five",
];

const reducer = (state: { selectedIndex: number }, action: any) => {
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
        selectedIndex: (state.selectedIndex = list.length - 1),
      };
    case "Home":
      return {
        selectedIndex: (state.selectedIndex = 0),
      };
    case "select":
      return { selectedIndex: action.payload };
          default:
      throw new Error();
  }
};

const initialState = { selectedIndex: undefined };

const KeyboardHandling = () => {
  const arrowUpPressed = useKeyPress("ArrowUp");
  const arrowDownPressed = useKeyPress("ArrowDown");
  const endPressed = useKeyPress("End");
  const homePressed = useKeyPress("Home");
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
  if (arrowUpPressed) {
        dispatch({ type: "arrowUp" });
      } else  if (arrowDownPressed) {
            dispatch({ type: "arrowDown" });
          } else  if (endPressed) {
                dispatch({ type: "End" });
              } else if (homePressed) {
                    dispatch({ type: "Home" });
                  }
    }, [arrowUpPressed, arrowDownPressed, endPressed, homePressed]);

  return (<List list={list} state={state} dispatch={dispatch}  />
 );
};

export default KeyboardHandling;


