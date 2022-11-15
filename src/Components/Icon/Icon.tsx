import "font-awesome/css/font-awesome.min.css";
import StyledIcon from "./Icon.style";

type IconProp = {
    /**
   * we are using it for Icon classname
   */
  iconname?: string;
};

const Icon = ({iconname}: IconProp) => {
  
  return (
    <StyledIcon id="icon">
      <i className={iconname !== ''? iconname : 'fa-solid fa-envelope'}></i>
    </StyledIcon>
  );
};

export default Icon;
