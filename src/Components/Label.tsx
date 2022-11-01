import {
  Wrapper,
  StyledLabelH3,
  StyledLabelP,
} from "./StyledComponents/StyledLabel";
import {ComponentStory, ComponentMeta } from '@storybook/react';

type LabelProps = {
  title: string;
  /**
   * we are using as subtitle
   */
  subtitle: string;
};

const Template: ComponentStory(typeof Label) = ({ title, subtitle }: LabelProps) {
  return (
    <Wrapper>
      <StyledLabelH3 > {title}</StyledLabelH3>
      <StyledLabelP > {subtitle}</StyledLabelP>
    </Wrapper>
  );
}

export default Label;
