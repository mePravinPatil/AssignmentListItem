import { useState } from "react";
import StyledLabel from "./StyledComponents/StyledLabel";

function Label() {
    const [title, setTitle] = useState('List Item Title');
    const [subtitle, setSubTitle] = useState('List Item subtitle');

    return (
        <StyledLabel>
            <h3 onClick={() => setTitle('NewTitle')}> {title} </h3>
            <p onClick={() => setSubTitle('NewSubTitle')}> {subtitle}</p>
        </StyledLabel>
    )
}

export default Label;