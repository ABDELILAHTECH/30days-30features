
export default function SuggestionsItem({product, isActive}) {
  const handleClick = () => {
    isActive && alert(product)
  }
  return (
    <li className={isActive ? "active" : ""} onClick={handleClick}>
       {product}
    </li>
  )
}
