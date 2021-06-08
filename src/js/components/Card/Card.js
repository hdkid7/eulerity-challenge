import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  addDownload,
  removeDownload,
} from "../../features/download_manager/downloadSlice";
import { useState,useEffect } from "react";
import Notificiation from "../Notification/Notification";


const StyledCheckBox = styled.input`

    -webkit-appearance:none;
    width:30px;
    height:30px;
    background:white;
    border-radius:5px;
    border:2px solid #555;


`


const CardContainer = styled.div`
  border-radius: 10px;
  height: 58vh;
  width: 27vw;
  min-width: 220px;
  background-color: white;
  transition: transform 0.5s ease-in-out;
  background-size: cover;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 23px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

 
  margin: 0;
  img {
    height: 75%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    border-bottom-left-radius: initial;
    border-bottom-right-radius: initial;
  }
`;

const CardDetails = styled.div`
text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 23%;
  margin:0em 0.7em 0.7em 2.7em;
  font-size:0.9em;


  p {
    font-size: 0.6em;
    line-height:1.2em;
  }
`;

const DownloadDiv = styled.div`
  position: absolute;
  border: 3px black solid;
    margin: 0.3em;
    border-radius: 10px;
    padding:0.2em;
`;

function Card({ title, description, created, imageUrl ,setNotificationState,alt}) {






  const dispatch = useDispatch();
  const imgArray = useSelector((state) => state.download.value);

  const [checkedState,setCheckedState] = useState(false)


  const checkBoxHandler = () => {
    if (!checkedState) {
      showNotificationTimer(2000,false)
      dispatch(addDownload({imageUrl,title}));
      setCheckedState(!checkedState)
    } else {
      showNotificationTimer(2000,true)
      dispatch(removeDownload({imageUrl,title}));
      setCheckedState(!checkedState)
    }
  };

  const showNotificationTimer = (ms,isRemoved) => {
    setNotificationState({"display":true,"isRemoved":isRemoved,"imgUrl":imageUrl,"title":title})

    setTimeout(() => {
      setNotificationState({"display":false,"isRemoved":isRemoved,"imgUrl":imageUrl,"title":title})
    },ms)
  }



  useEffect(() => {
    if(imgArray) setCheckedState(imgArray.includes(imageUrl))
  }, [imgArray,imageUrl])

  // Check state gets reset on filter, this function checks if it in the downloader array and rechecks the images marked for download


  return (
    <>
      <CardContainer imageUrl={imageUrl}>
        <DownloadDiv>
          <input
            type={"checkbox"}
            onChange={checkBoxHandler}
            checked={checkedState}

            style = {{cursor:"pointer",height:"2em",width: "24px"}}
          />
          <FontAwesomeIcon icon={faDownload} size={"sm"} style = {{marginBottom: "0.17em",
    marginLeft: "0.3em"}}  />
        </DownloadDiv>

        <img src={imageUrl} alt={alt}/>
        <CardDetails>
          <p className="card-title"><span style={{fontWeight:"bold"}}>Title: </span>{title}</p>
          <p className="card-description"><span style={{fontWeight:"bold"}}>Description: </span>{description}</p>
          <p className="card-dateCreated"><span style={{fontWeight:"bold"}}>Date Created: </span>{created}</p>
        </CardDetails>
      </CardContainer>
    </>
  );
}

export default Card;
