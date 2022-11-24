import React from "react"
import {StyledListItem, StyledUList} from './KeyboardHandling.style';

type ListProps = {
    list: string[];
    state: {selectedIndex:number};
    dispatch : any
}
const List = ({list, state, dispatch}:ListProps) => {
    return (
        <StyledUList>
      {list.map((item, i) => (
        <StyledListItem
          className="parent-list"
          key={item}
          onClick={() => {
            dispatch({ type: "select", payload: i });
          }}
        //   style={{
        //     cursor: "pointer",
        //     color: i === state.selectedIndex ? "red" : "black",
        //   }}
        >
          {item}
        </StyledListItem>
      ))}
    </StyledUList>
    )
}

export default List;