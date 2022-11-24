import styled, { css } from "styled-components";

export const StyledListItem = styled.li`

cursor: "pointer"
    border: 1px solid rgb(136, 136, 136);
    padding-inline-end : 100px;
    margin : 0px;



    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
 

 
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;


  
    


  `;
export const StyledUList = styled.ul`
  list-style: none;
  padding-inline-start: 0px;
`;

// interface ListProps {
//   list: string[];
//   state: { selectedIndex: number };
//   dispatch: any;
// }

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
