import styled, { css } from "styled-components";

interface ListProps {
  state: { selectedIndex: number };
 
}

export const StyledDivItem = styled.div`
  margin: 10px;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid black;
  display : flex;
  justify-content: space-between;
  align-items: baseline;
  // box-shadow: 2px 2px #b6afaf;
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

export const getTitleProperty = (i: any, state: { selectedIndex: any; }) => {
  if(i === state.selectedIndex){
      return css`
          border : none;
          margin : 10px 0 0 0;
          font-size: 20px;
          font-weight : bold;
      `;
  }else{
      return css`
          border : none;
          margin : 5px 0 0 0;
      `;
  }
}

export const StyledList = styled.li<ListProps>`
${({i, state.selectedIndex})=>getTitleProperty(isTitle)};
`
