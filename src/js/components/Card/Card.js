import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  addDownload,
  removeDownload,
} from "../../features/download_manager/downloadSlice";
import { useState } from "react";
import Notificiation from "../Notification/Notification";

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

  &:hover {
    transform: scale(1.05);
  }
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
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 25%;
  p {
    font-size: 1.1em;
  }
`;

const DownloadDiv = styled.div`
  position: absolute;
`;

function Card({ title, description, dateCreated, imageUrl ,setNotificationState}) {

  const dispatch = useDispatch();
  const imgArray = useSelector((state) => state.download.value);

  const checkBoxHandler = (e) => {
    if (e.target.checked) {
      showNotificationTimer(3000,false)
      dispatch(addDownload({imageUrl,title}));
    } else {
      showNotificationTimer(3000,true)
      dispatch(removeDownload({imageUrl,title}));
    }
  };

  const showNotificationTimer = (ms,isRemoved) => {
    setNotificationState({"display":true,"isRemoved":isRemoved,"imgUrl":imageUrl,"title":title})

    setTimeout(() => {
      setNotificationState({"display":false,"isRemoved":isRemoved,"imgUrl":imageUrl,"title":title})
    },ms)
  }

  const imgUrlArray = imgArray.map((obj) => obj.payload);

  // Check state gets reset on filter, this function checks if it in the downloader array and rechecks the images marked for download
  const autoCheckOnUpdate = () => imgUrlArray.includes(imageUrl);



  return (
    <>
      <CardContainer imageUrl={imageUrl}>
        <DownloadDiv>
          <input
            defaultChecked={autoCheckOnUpdate}
            type={"checkbox"}
            onClick={checkBoxHandler}
          />
          <FontAwesomeIcon icon={faDownload} size={"lg"} cursor={"pointer"} />
        </DownloadDiv>

        <img src={imageUrl} />
        <CardDetails>
          <p className="card-title">Title: {title}</p>
          <p className="card-description">Description: {description}</p>
          <p className="card-dateCreated">Date Created: {dateCreated}</p>
        </CardDetails>
      </CardContainer>
    </>
  );
}

export default Card;
