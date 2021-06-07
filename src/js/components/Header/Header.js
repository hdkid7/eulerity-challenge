import styled , {css} from 'styled-components'
import logo from "../../../assets/animal-logo.png"

const StyledHeader = styled.div`
    height:13vh;
   background-color:#FF4F58FF; 
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin-bottom:2em;
    font-weight:bold;

`

const Links = styled.div`
    width: 35vw;
    display: flex;
    justify-content: space-around;


    a{

        text-decoration:none;
        color:black;
    }

`



function Header() {
    

    return(
        <StyledHeader>
           <Links className="links">
                <a href="https://google.com">ABOUT ME</a>
                <a href="https://google.com">IMAGE GALLERY</a>
                <a href="https://google.com">Fluffy Images</a>
            </Links> 
            <div className="logo-title">
                <img style = {{borderRadius:"50%",height:"5em"}} src={logo} alt ="animal logo" />
            </div>
        
        </StyledHeader>
    )
}

export default Header;