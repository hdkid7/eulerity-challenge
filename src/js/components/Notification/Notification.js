import React from "react"
import styled, { keyframes } from "styled-components"

const comeInThenFadeOut = keyframes`

0%{
  opactiy:0; 
    transform: translate(500px,0)
}

20% {
    opacity:1;
    transform:translate(0,0)

}


50%{
    opacity:1;
}

100%{
    opacity:0;
    display:none;
}












`

const StyledNotification = styled.div`

    position: absolute;
    height: 7em;
    display: flex;

    align-items: center;
 
    right: 0;
    text-align: center;
    top: 5em;
    background: ${props => props.removed ? "red" : "green"};
    width: 25em;
    color:${props => props.removed ? "white" : "black"};

    animation: ${comeInThenFadeOut} 3s ease-in-out;
    animation-fill-mode:forwards;



`


const Notificiation = ({title,imageUrl,isRemoved}) => 
    
    <div>

    {isRemoved ? 

        <StyledNotification removed>
            <p style = {{width:"50%",lineHeight: "1.3em"}}>Image "{title}" removed from list 😰</p>
            <img style = {{width:"50%",height:"100%",objectFit:"contain"}} src={imageUrl} />
        </StyledNotification>
        :


        <StyledNotification>
            <p>Image "{title}"" added to list 😁</p>
            <img style={{width:"50%",height:"100%",objectFit:"contain"}} src={imageUrl} />
        </StyledNotification>
    
    
    }

    </div>
    

export default Notificiation