
export default function SuggestionsItem({product, isActive}) {
  const handleClick = () => {
    isActive && alert(product)
  }
  return (
    <li className={`sug-item ${isActive ? "active" : ""}`} onClick={handleClick}>
       {product}
    </li>
  )
}
