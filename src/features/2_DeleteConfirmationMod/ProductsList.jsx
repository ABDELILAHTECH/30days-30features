
import ProductCard from "./ProductCard"
export default function ProductsList({products, 
  handleProductDelTitleSet,
  modalOpen
}) {
  
  return (
    <section className="products-list-section">
        <h2>Products</h2>
        <ul className="product-list-items">
           {
            products.map((product)=>
              <ProductCard 
               key={product.title} product={product} 
               handleProductDelTitleSet={handleProductDelTitleSet}
               modalOpen={modalOpen}
               />
            )
           }
        </ul>
    </section>
  )
}
