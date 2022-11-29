import styled, { css } from "styled-components";

interface ListProps {
  list: string[];
  state: { selectedIndex: number };
  dispatch: any;
}

export const StyledDivItem = styled.div`
  margin: 10px;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid black;
  display : flex;
  justify-content: space-between;
  align-items: baseline;
  box-shadow: 3px 3px #b6afaf;
`;

export const StyledUList = styled.ul`
  list-style: none;
  padding-inline-start: 0px;
`;

export const StyledList = styled.li`
 margin : 5px;
`;
export const StyledImage = styled.img`
  width: 20px;
  height: 20px;
  margin: 5px 0 5px 100px;
  margin-right: 10px;
  justify-content: space-between;
  align-items: baseline;
  border-radius : 50px;
`;

// export const getTitleProperty = (
//   list: string[],
//   state: { selectedIndex: number },
//   dispatch: any
// ) => {
//   if (i === state.selectedIndex) {
//     return css`
//       cursor: "pointer",
//       color: "red",
//       margin : 10px;
//     padding : 5px;
//     font-size: x-large;
//       `;
//   } else {
//     return css`
//       cursor: "pointer",
//       color: "black",
//       margin : 10px;
//     padding : 5px;
//     font-size: x-large;
//       `;
//   }
// };

// export const StyledList = styled.ul<ListProps>`
//   ${({ list,
//     state,
//     dispatch}) => getTitleProperty(list,
//       state,
//       dispatch)};
// `;
