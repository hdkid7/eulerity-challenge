import styled , {css} from 'styled-components'
import Card from "../Card/Card"
import Header from '../Header/Header';
import ImageSlider from '../ImageSlider/ImageSlider';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addAllToDownload,removeAllFromDownload } from '../../features/download_manager/downloadSlice';
import Notificiation from '../Notification/Notification';
import axios from 'axios';
const StyledInput = styled.input`


  width: 26vw;
  border: 3px solid #00B4CC;
  
  padding: 10px;
  height: 20px;
  border-radius: 1em;
  outline: none;
  color: #9DBFAF;


&:focus{
  color: #00B4CC;
}


`

const InputDiv = styled.div`
  display:flex;
  flex-direction:row;
  width:100vw;
  justify-content:space-around;


`



function Example() {

  const inMemArr = [
    {"title":"Tim \u0026 Jim","description":"The best buds that anyone could have","url":"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Barky Spears","description":"Woof! I did it again","url":"https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Pickles","description":"Judging you for dropping the ball","url":"https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Woody","description":"Lost the laser pointer a while ago but still trying to play along","url":"https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Mathis","description":"Beautiful, but not easily fooled by your ploys to distract her from her upcoming meal.","url":"https://images.pexels.com/photos/290204/pexels-photo-290204.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Bucky","description":"Here to remind you that not all heros wear caps...some are just Dachshunds","url":"https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Montana","description":"Got her eyes on that prize...peanut butter","url":"https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Smol","description":"His name is Smol because he is just that...smol","url":"https://images.pexels.com/photos/53966/rabbit-palm-hand-snatch-53966.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Frito","description":"Bathtime isn\u0027t his favprote but he\u0027s tolerant.","url":"https://images.pexels.com/photos/485294/pexels-photo-485294.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Benny","description":"Strong genetic predispositon for mailmen suspicion.","url":"https://images.pexels.com/photos/1619690/pexels-photo-1619690.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Len","description":"Strengths: sitting on command for treats. Weaknesses: Fear of thunder.","url":"https://images.pexels.com/photos/2664417/pexels-photo-2664417.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Sasha","description":"She\u0027s beauty... she\u0027s grace... she might attack your face...","url":"https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Dottie","description":"Just always having too good a time...you can take her anywhere...wags her tail with unparalleled force.","url":"https://images.pexels.com/photos/1591939/pexels-photo-1591939.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Moose","description":"Loves: walks down the street and belly rubs. Hates: whenever the door bell rings.","url":"https://images.pexels.com/photos/1390784/pexels-photo-1390784.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Duchess","description":"Tolerates being held. Consistently gets the zooms between 2 to 3 am.","url":"https://images.pexels.com/photos/1383397/pexels-photo-1383397.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Hagrid","description":"Don\u0027t let his size intimidate you. The sweetest bug around.","url":"https://images.pexels.com/photos/1521304/pexels-photo-1521304.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Midnight","description":"Talented at Hide \u0026 Seek. Excellent hunter.","url":"https://images.pexels.com/photos/37337/cat-silhouette-cats-silhouette-cat-s-eyes.jpg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Marten","description":"Senior Bun. Loves Cilantro.","url":"https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Sandy","description":"Often found on warm rocks.","url":"https://images.pexels.com/photos/407037/gecko-reptile-terrarium-lizard-407037.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Rupert","description":"Endurance athlete with occasional sprints to the retrieve the daily feed.","url":"https://images.pexels.com/photos/886210/pexels-photo-886210.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"},{"title":"Polly","description":"Excellent imitator. Dislikes being patronized with crackers.","url":"https://images.pexels.com/photos/56733/pexels-photo-56733.jpeg?format\u003dtiny","created":"Thu Jun 03 01:26:48 UTC 2021"}]


    const dispatch = useDispatch()
 
  const [currentInMemArr,setCurrentInMemArr] = useState(inMemArr)
  
  const [descriptionSearch,setDescriptionSearch] = useState("")

  const [titleSearch,setTitleSearch] = useState("")

  const [checkAll,setCheckAll] = useState(false)

 

  const filterTitleAndDescription = () => currentInMemArr.filter(obj => obj.description.toLowerCase().trim().includes(descriptionSearch) && obj.title.toLowerCase().trim().includes(titleSearch))

  const imgArray = useSelector(state => state.download.value)
  const titleArray = useSelector(state => state.download.checkedState)

  
  const [notificationState, setNotificationState] = useState({"display":false,"isRemoved": false,"imgUrl":"","title":""});


  const generateCardComponents = (object) => object.map(comp => <Card isChecked={checkAll} title = {comp.title} description={comp.description} created={comp.created} imageUrl={comp.url} setNotificationState = {setNotificationState}/>)

  const selectedImageAmount = useSelector((state) => state.download.value.length);
  const downloadImages = () => {
      const imgUrlArray = imgArray.map((obj) => obj.payload || obj);
      const formatedTitles = titleArray.map(x => x.replace(" ","_"))
      imgUrlArray.forEach((url,idx) => {
        fetch(url,{
          method:"GET",
          headers :{
            'Content-Type':'image/jpeg'
          }
        }).then((res) => res.blob())
        .then((blob) => {
          const windUrl = window.URL.createObjectURL(
            new Blob([blob]),
          );

          const link = document.createElement('a')
          link.href = windUrl
          link.setAttribute('download',`${formatedTitles[idx]}.jpg`)

          document.body.appendChild(link)

          link.click()

          link.parentNode.removeChild(link)

        })

        
          
        
      })
  }

    const deselectAllUrl = () => {
      dispatch(removeAllFromDownload())
    }

    const addAllUrl = () => {
      dispatch(addAllToDownload(currentInMemArr.map(x => x.url)))
    }

  return (
    <div className="App">
    {notificationState.display && <Notificiation isRemoved = {notificationState.isRemoved}  imageUrl={notificationState.imgUrl} title={notificationState.title} />}
      <Header/>
        <InputDiv>

        <StyledInput type="text" value={descriptionSearch} placeholder="search image by description" onChange = {(e) => setDescriptionSearch(e.target.value) }/>
        <button onClick = {downloadImages}>Download <span>{selectedImageAmount}</span> Image(s)</button>
        
        <button onClick = {deselectAllUrl}>Deselect All</button>
        <button onClick = {addAllUrl}>Select all</button>
        <StyledInput type ="text" value={titleSearch} placeholder="search image by Title" onChange = {e => setTitleSearch(e.target.value)}/>
        </InputDiv>
        <ImageSlider components = {generateCardComponents(filterTitleAndDescription())} />
      
    </div>
  );
}

export default Example;
