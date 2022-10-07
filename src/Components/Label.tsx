import { useState } from "react";
import {Wrapper, StyledLabelH3, StyledLabelP} from "./StyledComponents/StyledLabel";

function Label() {
    const [title, setTitle] = useState('List Item Title');
    const [subtitle, setSubTitle] = useState('List Item Title subtitle');

    return (
        <Wrapper>
            <StyledLabelH3 onClick={() => setTitle('NewTitle')}> {title} </StyledLabelH3>
            <StyledLabelP onClick={() => setSubTitle('NewSubTitle')}> {subtitle}</StyledLabelP>
        </Wrapper>
    )
}

export default Label;
