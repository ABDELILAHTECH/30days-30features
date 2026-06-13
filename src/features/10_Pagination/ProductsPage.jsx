import "./style10.scss"
import { useState, useEffect } from "react"
export default function ProductsPage() {
  let [products, setProducts] = useState([])
  const LIMIT = 5;
  const [skip, setSkip] = useState(0)
  const [currentPageIndex, SetcurrentPageIndex] = useState(0)
  const handlePageBtnClick = (index) =>{
    setSkip(LIMIT * index)
    SetcurrentPageIndex(index)
  }
  
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`)
    .then(response => response.json())
    .then(data => setProducts(data.products))
  },[skip])
  useEffect(() => {
    console.log(products)
  },[products])

  return (
    <div className='products-pag-page'>
      <h2>Products</h2>
      <ul className='products-pag-list'>
          {
            products.length >= 1 &&
            products.map(product =>
                <li key={product.id} className='product-pag-card'>
                    <img src={product.thumbnail} alt="" />
                    <h3>{product.title}</h3>
                    <div>
                        <span className="product-price">{product.price}$</span>
                        <span className="product-category">{product.category} </span>
                    </div>
                    <button>Add To Cart</button>
                </li>
            )
          }
      </ul>
      <div className="pagination-info">

      </div>
      {
        products.length >= 1 &&
      <div className="pagination">
        <div className="pagination-info">
          {`${skip + 1}-${skip + products.length} of 30 products`}
        </div>
        <ul className="total-pages">
          {
          Array.from({ length: 6 }, (_, i) => (
          <li className="page-item" key={i+1}>
            <button 
            className={`page-btn 
            ${currentPageIndex === i ? "active" : ""}`} 
            onClick={() => handlePageBtnClick(i)}
            >
              {i+1}
            </button>
          </li>
        ))}
        </ul>
        <div>
           <button className="prev-btn"
           disabled={currentPageIndex === 0}
           onClick={() => handlePageBtnClick(currentPageIndex - 1)}
           >
            Previous
            </button>
           <button className="next-btn"
           disabled={currentPageIndex === 5}
           onClick={() => handlePageBtnClick(currentPageIndex + 1)}
           >Next</button>
        </div>
      </div>
      }
    </div>
  )
}
