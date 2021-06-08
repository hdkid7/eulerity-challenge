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
    z-index:99999;
    position: absolute;
    height: 5em;
    display: flex;

    align-items: center;
 
    right: 0;
    text-align: center;
    top: 2em;
    background: ${props => props.removed ? "red" : "green"};
    width: 20em;
    color:${props => props.removed ? "white" : "black"};

    animation: ${comeInThenFadeOut} 2s ease-in-out;
    animation-fill-mode:forwards;



`


const Notificiation = ({title,imageUrl,isRemoved}) => 
    
    <div>

    {isRemoved ? 

        <StyledNotification removed>
            <p style = {{marginLeft:"1.5em",width:"50%",lineHeight: "1.1em",fontSize:"0.8em"}}>Image "{title}" removed from list 😰</p>
            <img style = {{width:"50%",height:"100%",objectFit:"contain"}} src={imageUrl} alt = {title} />
        </StyledNotification>
        :


        <StyledNotification>
            <p style = {{marginLeft:"1.5em",width:"50%",lineHeight: "1.1em",fontSize:"0.8em"}}>Image "{title}" added to list 😁</p>
            <img style={{width:"50%",height:"100%",objectFit:"contain"}} src={imageUrl} alt = {title} />
        </StyledNotification>
    
    
    }

    </div>
    

export default Notificiation