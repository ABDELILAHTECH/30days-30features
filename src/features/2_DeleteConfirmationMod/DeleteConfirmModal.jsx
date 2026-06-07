import MacBookAirImg from "./Images/mac-book-air.jpg"
import MacBookNeoImg from "./Images/mac-book-neo.jpg"
import StudioDisplayImg from "./Images/studio-display.jpg"
import {  useEffect, useState } from "react"
import ConfirmModal from "./ConfirmModal";
import ProductsList from "./ProductsList";
import "./style2.scss"

export default function DeleteConfirmModal() {
    const [modalIsOpen , setModalIsOpen] = useState(false);
    const products = [
    {
      title:"MacBook Neo",
      image:MacBookNeoImg,
      price:599,
    },
    {
      title:"MacBook Air",
      image:MacBookAirImg,
      price:1099,
    },
    {
      title:"Studio Display",
      image:StudioDisplayImg,
      price:1599,
    },
    ]
    
    const [filteredProducts,setFilteredProducts] = useState(products)
    const [productDelTitle, setProductDelTitle] = useState("")
    const productDelete = () => {
        setFilteredProducts(
            filteredProducts.filter(product =>
                product.title !== productDelTitle
            )
        )
        setProductDelTitle("")
    }
    const handleKeyDown = (e) => {
      if (e.key === "") {
      setModalIsOpen(false);
      }
    };
    useEffect(() => {
      if (modalIsOpen) {
        window.addEventListener("keydown",handleKeyDown)
        document.body.style.overflow = "hidden";
      }
        return () => { 
          window.removeEventListener("keydown",handleKeyDown)
          document.body.style.overflow = "auto";
        }
    },[modalIsOpen])
    return (
    <div className="delete-confirm-modal">
       <ProductsList products={filteredProducts}
        handleProductDelTitleSet={(title) =>
            setProductDelTitle(title)
        } 
        modalOpen={() => setModalIsOpen(true)}
        />
    {
        modalIsOpen && 
        <div className="overlay" onClick={() => setModalIsOpen(false)}>
        <ConfirmModal 
        productTitle={productDelTitle}
        modalClose={() => setModalIsOpen(false)} 
        productDelete={productDelete}
        />
        </div>
    }
    </div>
  )
}
