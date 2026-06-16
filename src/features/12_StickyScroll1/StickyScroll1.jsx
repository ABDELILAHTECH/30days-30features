import { useState } from "react"
import MaciPhone from "./Images/mac-iphone.png"
import MaciPad from "./Images/mac-ipad.png"
import MacAppleWatch from "./Images/mac-apple-watch.png"
import "./style12.scss"
export default function StickyScroll1() {
  const featureCards = [
    {
        id:1,
        title:"Mac and iPhone",
        description:"Answer calls or messages from your iPhone directly on your Mac. See and control your iPhone from your Mac with iPhone Mirroring. Copy text, photos, or videos on one device and paste them on the other with Universal Clipboard.",
        image:MaciPhone
    },
    {
        id:2,
        title:"Mac and iPad",
        description:"Expand your workspace with Sidecar and use your iPad as a second display. Draw with Apple Pencil, move files between devices, and stay productive wherever you work.",
        image:MaciPad
    },
    {
        id:3,
        title:"Mac and Apple Watch",
        description:"Unlock your Mac automatically when wearing your Apple Watch. Approve passwords, sign in to apps, and enjoy a faster, more secure experience.",
        image:MacAppleWatch
    }
  ] 
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(1)

  return (
    <>
    <div className="container">
       <div className="sticky-scroll-container">
       <ul className="mac-cards">
           {
            featureCards.map(card => 
                <li key={card.id}
                className="mac-card"
                >
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                </li>
            )
           }
       </ul>
       <div>
        <img src={featureCards[activeFeatureIndex - 1].image} alt="" />
       </div>
       </div>
    </div>
    <div style={{height:"100vh"}}>

    </div>
    </>
  )
}
