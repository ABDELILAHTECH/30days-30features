
export default function IngredientItem({ingredient, ingredientsSelection, isSelected}) {
  const handleChecking = () => {
    ingredientsSelection(ingredient.id)
  }
  return (
    <li className="ingredient-item" 
    onClick={() => handleChecking()}>
       <span className="checkbox-container">
        <input type="checkbox" id={ingredient.name} checked={isSelected} onChange={() => {}}/>
       </span>
       <label htmlFor={ingredient.name} className="country-name">
        {ingredient.name}
       </label>
    </li>
  )
}
