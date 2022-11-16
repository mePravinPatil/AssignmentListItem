import { StyledLabel } from "./Label.style";

export type LabelProps = {
  /**
   * we are using as title
   */
  text?: string;
  /**
   * we are using as subtitle
   */
  isTitle: boolean;
};

const Label = ({ text='Title is not Available', isTitle}: LabelProps) => {
  return (
    <StyledLabel isTitle={isTitle}> {text}</StyledLabel>
  );
};

export default Label;
