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

const Label = ({ text, isTitle }: LabelProps) => {
  let newtext = "Title is not Available";
  return (
    <StyledLabel isTitle={isTitle}> {text !== "" ? text : newtext}</StyledLabel>
  );
};

export default Label;
