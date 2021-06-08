import styled from "styled-components"

const StyledButton = styled.button`
  

border: 3px solid white;
  z-index: 1;
  color: black;
padding: 10px 25px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;

  &:after{
        position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  direction: rtl;
  z-index: -1;
  background: ${props => props.primary ? '#ff4f58ff' : "#00ab66"};
  transition: all 0.3s ease;
  }

  &:hover{
      color: rgb(0, 0, 0);
  }

  &:hover:after{
        left: auto;
  right: 0;
  width: 100%;
  }


`


const Button = ({text,isPrimary,clickAction}) => {



return(
    <StyledButton primary={isPrimary} onClick={clickAction}>{text}</StyledButton>
)

}


export default Button