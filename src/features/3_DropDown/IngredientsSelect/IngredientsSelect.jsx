import { useState } from "react"
import IngredientsTrigger from "./IngredientsTrigger";
import IngredientsList from "./IngredientsList";

export default function IngredientsSelect() {
  const ingredients = [
    {
        id:0,
        name:"Rice",
    },
    {
        id:1,
        name:"Avocado"
    },
    {
        id:2,
        name:"Salmon"
    }
  ]
  const [ dropdown, setDropdown ] = useState(false);
  const [ ingredientsSelected, setIngredientsSelected ] = useState([])
  const handleIngredientSelection = (id) => {
    setIngredientsSelected(prev => {
      const alreadySelected = prev.some(i => i.id === id)
    
      if (alreadySelected) {
        return prev.filter(i => i.id !== id)
      } else {
        return [...prev, ingredients.find(i => i.id === id)]
      }
    }) 
  }
  return (
    <div className="dropdown-container">
    <p className={`dropdown-title 
      ${dropdown || ingredientsSelected.length > 0
        ? "up" 
        : "down"}`} >Select ingredients</p>
    <div>
      <IngredientsTrigger 
        dropdown={dropdown} 
        setDropdown={() => setDropdown(!dropdown)}
        ingredients={ingredientsSelected}  
      />
      {
        dropdown &&
        <IngredientsList 
        ingredients={ingredients}
        ingredientsSelected={ingredientsSelected}
        ingredientsSelection={handleIngredientSelection}
        /> 
      }
    </div>
    </div>
  )
}
