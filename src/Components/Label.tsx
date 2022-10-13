import { useState } from "react";
import { Wrapper, StyledLabelH3, StyledLabelP } from "./StyledComponents/StyledLabel";

type LabelProps = {
    title: string,
    subtitle: string,
}

function Label(props: LabelProps) {

    const [title, setTitle] = useState(props.title);
    const [subtitle, setSubTitle] = useState(props.subtitle);

    return (
        <Wrapper>
            <StyledLabelH3
                onClick={() => setTitle('NewTitle')}
                data-testid ='clickTitle'> {title}
            </StyledLabelH3>
            <StyledLabelP
                onClick={() => setSubTitle('NewSubTitle')}
                data-testid='clickSubTitle'> {subtitle}
            </StyledLabelP>
        </Wrapper>
    )
}

export default Label;
