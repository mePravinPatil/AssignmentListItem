import styled, { css } from "styled-components";

interface ListProps {
  i: number;
 state: any;
}

// export const StyledDivItem = styled.div`
//   margin: 10px;
//   cursor: pointer;
//   border-radius: 3px;
//   border: 1px solid black;
//   display : flex;
//   justify-content: space-between;
//   align-items: baseline;
// `;

export const StyledUList = styled.ul`
  list-style: none;
  padding-inline-start: 0px;
`;

export const StyledList = styled.li`
  margin:auto;
  justify-content: space-between;
  align-items: baseline;
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

export const getTitleProperty = (i: number, state: any) => {
  if(i === state){
      return css`
      color:red;
      box-shadow: 2px 2px #b6afaf;
      margin: 10px;
      cursor: pointer;
      border-radius: 3px;
      border: 1px solid black;
      display : flex;
      justify-content: space-between;
      align-items: baseline;
      `;
  }else{
      return css`
          border : none;
          margin : 10 px;
          cursor: pointer;
          border-radius: 3px;
          border: 1px solid black;
          display : flex;
          justify-content: space-between;
          align-items: baseline;
      `;
  }
}

export const StyledDivItem = styled.div<ListProps>`
${({i, state})=>getTitleProperty(i, state)};
`
