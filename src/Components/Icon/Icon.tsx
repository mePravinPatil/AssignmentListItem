import "font-awesome/css/font-awesome.min.css";
import StyledIcon from "./Icon.style";

type IconProp = {
    /**
   * we are using it for Icon class-name
   */
  iconname?: string;
};

const Icon = ({iconname = 'fa-solid fa-envelope'}: IconProp) => {
  
  return (
    <StyledIcon id="icon">
      <i id='test' className={iconname }></i>
    </StyledIcon>
  );
};

export default Icon;
