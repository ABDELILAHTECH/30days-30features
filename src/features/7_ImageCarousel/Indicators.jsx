
export default function Indicators(
    {images,activeImgIndex, handleIndicatorClick
    }
) {
  return (
    <ul className="indicators">
       {  
       images.map((image,index) => 
        <li key={image.id}>
            <button
            className={`${activeImgIndex === index ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
            >
            </button>
        </li>
       ) 
            
       }
    </ul>
  )
}
