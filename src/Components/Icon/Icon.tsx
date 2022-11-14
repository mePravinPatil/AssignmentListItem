import styled, { css } from 'styled-components';
import { LabelProps } from './Label';
interface IsTitle {
    isTitle: LabelProps['isTitle'];
}


export const getTitleProperty = (isTitle:boolean) => {
    if(isTitle){
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

export const StyledLabel = styled.div<IsTitle>`
${({isTitle})=>getTitleProperty(isTitle)};
`
