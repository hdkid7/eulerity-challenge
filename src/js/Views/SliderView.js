import styled from "styled-components";
import Card from "../components/Card/Card";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import { useEffect, useRef } from "react";
import ImageDownloader from "../helperFunctions/ImageDownloader";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addAllToDownload,
  removeAllFromDownload,
} from "../features/download_manager/downloadSlice";
import Notificiation from "../components/Notification/Notification";
import axios from "axios";
import Button from "../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const StyledInput = styled.input`
  width: 13em;
  border: 4px solid black;

  padding: 10px;
  height: 20px;
  border-radius: 1em;
  outline: none;
  color: #9dbfaf;
  margin-bottom: 1em;

  &:focus {
    color: black;
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 97vw;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

function SliderView() {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://eulerity-hackathon.appspot.com/pets")
      .then((res) => setData(res.data));
  }, [data]);

  const [descriptionSearch, setDescriptionSearch] = useState("");

  const [titleSearch, setTitleSearch] = useState("");

  const [checkAll, setCheckAll] = useState(false);

  const filterTitleAndDescription = () =>
    data.filter(
      (obj) =>
        obj.description.toLowerCase().trim().includes(descriptionSearch) &&
        obj.title.toLowerCase().trim().includes(titleSearch)
    );

  const imgArray = useSelector((state) => state.download.value);
  
  const titleArray = useSelector((state) => state.download.checkedState);

  const [notificationState, setNotificationState] = useState({
    display: false,
    isRemoved: false,
    imgUrl: "",
    title: "",
  });

  const generateCardComponents = (object) =>
    object.map((comp) => (
      <Card
        isChecked={checkAll}
        title={comp.title}
        description={comp.description}
        created={comp.created}
        imageUrl={comp.url}
        alt={`Image of ${comp.title}`}
        setNotificationState={setNotificationState}
      />
    ));

  const selectedImageAmount = useSelector(
    (state) => state.download.value.length
  );
  const downloadImages = () => {
    const downloader = ImageDownloader();
    const imgUrlArray = imgArray.map((obj) => obj.payload || obj);
    const formatedTitles = titleArray.map((x) => x.replace(" ", "_"));
    downloader.download(imgUrlArray, formatedTitles);
  };

  const deselectAllUrl = () => {
    dispatch(removeAllFromDownload());
  };

  const addAllUrl = () => {
    dispatch(
      addAllToDownload({
        arr: data.map((x) => x.url),
        title: data.map((x) => x.title),
      })
    );
  };

  // used for arrow cycle functionality (div must be focused)
  const autoFocusRef = useRef();
  function focus() {
    autoFocusRef.current
      .querySelector(".slick-track")
      .setAttribute("tabindex", "-1");
    autoFocusRef.current.querySelector(".slick-track").focus();
  }

  // focus div on app mount, allows you to use arrow keys to cycle images
  useEffect(() => {
    focus();
  }, []);

  return (
    <div ref={autoFocusRef} className="App">
      {notificationState.display && (
        <Notificiation
          isRemoved={notificationState.isRemoved}
          imageUrl={notificationState.imgUrl}
          title={notificationState.title}
        />
      )}

      <InputDiv>
        <StyledInput
          type="text"
          value={descriptionSearch}
          placeholder="Search By Description"
          onChange={(e) => setDescriptionSearch(e.target.value)}
        />
        <StyledInput
          type="text"
          value={titleSearch}
          placeholder="Search By Title"
          onChange={(e) => setTitleSearch(e.target.value)}
        />
        <button
          style={{
            border: "3px solid black",
            maxWidth: "15em",
            backgroundColor: "#00ab66",
            cursor: "pointer",
            borderRadius: "10px",
            color: "white",
            fontWeight: "bold",
            marginBottom: "1em",
          }}
          onClick={downloadImages}
        >
          Download <span>{selectedImageAmount}</span> Image(s){" "}
          <span>
            <FontAwesomeIcon icon={faDownload} />
          </span>
        </button>
        <Button clickAction={addAllUrl} isPrimary={false} text="Select All" />
        <Button
          clickAction={deselectAllUrl}
          isPrimary={true}
          text="Deselect All"
        />
      </InputDiv>
      <ImageSlider
        components={generateCardComponents(filterTitleAndDescription())}
      />
    </div>
  );
}

export default SliderView;
