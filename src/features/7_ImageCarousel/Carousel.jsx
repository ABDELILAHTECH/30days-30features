import MaillotHome from "./Images/maillot-home-2026.png"
import MaillotAway from "./Images/maillot-away-2026.png"
import TshirstPumaTech from "./Images/t-shirt-pumatech.png"
import ShortPumaTech from "./Images/short-pumatech.png"
import "./style7.scss"
import NextButton from "./NextButton"
import PreviousButton from "./PreviousButton"
import Indicators from "./Indicators"
import { useRef, useState } from "react"

export default function Carousel() {
  const images = [
    {
        id:1,
        src:MaillotHome,
        title:'Maillot Home 2026 Maroc',
        price:995,
    },
    {
        id:2,
        src:MaillotAway,
        title:'Maillot Away 2026 Maroc',
        price:995,
    },
    {
        id:3,
        src:TshirstPumaTech,
        title:'T-shirt PUMATECH Maroc',
        price:495,
    },
    {
        id:4,
        src:ShortPumaTech,
        title:'Short PUMATECH Maroc',
        price:660,
    }
  ] 
  const [activeImgIndex,setActiveImgIndex] = useState(0)
  const [activeImgIndex2, setActiveImgIndex2] = useState(0)
  const imgsListRef = useRef(null);
  const imgsList2Ref = useRef(null);
  const handleScroll = (index,ref) => {
        const listNode = ref.current;
        let imgNode = listNode.querySelectorAll('li > img')[index]
        imgNode.scrollLeft = 50
        imgNode.scrollIntoView({
          behavior:'smooth',
          block:"nearest",
          inline:'center'
        })
  }
  const handleIndicatorClick = (index,ref = imgsListRef) => {
       if (ref === imgsListRef) {
          setActiveImgIndex(index)
       }else{
          setActiveImgIndex2(index)
       }
       handleScroll(index,ref)
  }
  const handleNextClick = () => {
       const nextIndex = 
       activeImgIndex === images.length - 1 ? 0 : activeImgIndex + 1;
       setActiveImgIndex(nextIndex);
       handleScroll(nextIndex, imgsListRef);
   };


  const handlePrevClick = () => {
       const prevIndex = 
       activeImgIndex === 0 ? images.length - 1 : activeImgIndex - 1;
       setActiveImgIndex(prevIndex);
       handleScroll(prevIndex, imgsListRef);
       
  }
  return (
    <div className="carousel">
        <div className="carousel1-container">
            <div className="triggers-next-prev">
                <PreviousButton handlePrevClick={() => handlePrevClick(activeImgIndex)} />
                <NextButton handleNextClick={() => handleNextClick(activeImgIndex)} />
            </div>
            <ul className="imgs-list" ref={imgsListRef}>
               {
                images.map(image => 
                    <li key={image.id}>
                        <img src={image.src} alt={image.title} />
                        <h3>{image.title}</h3>
                        <span>{image.price}</span>
                    </li>
                )
               }
            </ul>
            <Indicators 
            images={images}
            activeImgIndex={activeImgIndex}
            handleIndicatorClick={handleIndicatorClick}
            />
        </div>
        
        
        
        <div className="carousel2-container">
            <ul className="imgs-list" ref={imgsList2Ref}>
               {
                images.map(image => 
                    <li key={image.id}>
                        <img src={image.src} alt={image.title} />
                        <h3>{image.title}</h3>
                        <span>{image.price}</span>
                    </li>
                )
               }
            </ul>
            <ul className="triggers2-list" >
                {images.map((image, index) => 
                    <li key={image.id} 
                    >
                        <button
                        className={`${activeImgIndex2 === index ? "active" : ""}`}
                        onClick={() => handleIndicatorClick(index,imgsList2Ref)}
                        >
                        </button>
                    </li>
                )}
            </ul>
        </div>
    </div>
  )

}
