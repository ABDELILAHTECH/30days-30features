import SuggestionsItem from "./SuggestionsItem";

export default function SuggestionsList({productsFiltred, isOpen, activeIndex}) {
 
 
    return (
    <div>
   {isOpen &&
    <ul className="sug-list">
      {
        productsFiltred.length >= 1 
        ? productsFiltred.map((product,index)=>
            <SuggestionsItem key={index} 
             isActive={index === activeIndex} product={product} />
        )
        : "No founds results"
        
      }
    </ul> 
    }
    </div>
  )
}
