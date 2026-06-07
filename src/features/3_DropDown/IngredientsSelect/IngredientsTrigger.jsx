export default function IngredientsTrigger(
    {
        dropdown, setDropdown , ingredients
    }
) {
  const borderColor = dropdown ? "#0056D2" : "black";
  return (
     <div className="dropdown-trigger" 
     onClick={setDropdown}
     style={{borderColor:borderColor}}>
      <div className="result">
      {
        ingredients &&
        ingredients.map((ingredient, index) => 
          <span key={ingredient.id}>
            {ingredient.name}
            {index === ingredients.length - 1 ? "" : ","} 
          </span>
        )
      }{}
      </div>
      <button 
      className="dropdown-btn">
          {
            dropdown 
            ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
              </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
          }
      </button>
    </div>
  )
}
