import StyledImage from './StyledComponents/StyledImage';

type ImageProps = {
   src : string,
   alt : string
}

function Image (props : ImageProps) {
   
 return (
    <StyledImage src={props.src} alt={props.alt}/>
 )
}

export default Image;
