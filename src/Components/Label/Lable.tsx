import {
  Wrapper,
  StyledLabelH3,
  StyledLabelP,
} from "./StyledLabel";

 export type LabelProps = {
  /**
   * we are using as title
   */
  title: string;
  /**
   * we are using as subtitle
   */
  subtitle: string;
  
};

const Label = ({ title, subtitle }: LabelProps) => {
  return (
    <Wrapper>
      <StyledLabelH3 > {title}</StyledLabelH3>
      <StyledLabelP > {subtitle}</StyledLabelP>
    </Wrapper>
  );
}

export default Label;
