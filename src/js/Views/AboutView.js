import styled from "styled-components";
import image from "../../assets/self-img.jpeg"

const AboutContainer = styled.div`
  height: 80vh;
  flex-wrap: wrap;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

const StyledImg = styled.img`
  width: 65%;

  object-fit: contain;
  border-radius: 20px;

  position: relative;
  width: 369px;
 
  background: #2e9cca;
  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;
  color: white;
  box-shadow: 20px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;

  &:hover {
    border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;
    box-shadow: 10px 10px rgba(0, 0, 0, 0.25);
  }
`;

const StyledTitle = styled.h1`
  margin-top: 0.5em;
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 0.5em;
  color: #2e9cca;
  font-weight: bold;
  letter-spacing: 0.1em;
`;

const StyledIntro = styled.div`
  width: 25em;
  margin-top: 2em;
  height: 26em;
  max-height: 660.2px;
  display: flex;
  align-items: center;
`;

const AboutView = () => {
  return (
    <AboutContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledImg
         src={
           image
          }
        />
      </div>

      <StyledIntro>
        <div
          style={{
            backgroundColor: "whitesmoke",
            height: "16em",
            margin: "1em",
            width: "100%",
            borderRadius: "2em",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          }}
        >
          <StyledTitle>Nice To Meet You</StyledTitle>
          <p
            style={{
              fontSize: "0.8em",
              lineHeight: "1.4em",
              marginLeft: "2em",
              marginRight: "2em",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </StyledIntro>
    </AboutContainer>
  );
};

export default AboutView;
