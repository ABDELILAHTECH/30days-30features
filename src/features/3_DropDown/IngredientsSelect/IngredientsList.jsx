import IngredientItem from "./IngredientItem"
export default function IngredientsList({ingredients, ingredientsSelection, ingredientsSelected}) {
  return (
    <ul className="dropdown-list">
        {
          ingredients.map(ingredient =>
            <IngredientItem 
            key={ingredient.id}
            ingredient={ingredient} 
            ingredientsSelection={ingredientsSelection} 
            isSelected={ingredientsSelected.some(i => i.id === ingredient.id)}
            />
          )
        }
    </ul>
  )
}
