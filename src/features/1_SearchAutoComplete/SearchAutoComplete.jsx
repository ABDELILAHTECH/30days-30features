import SearchInput from "./SearchInput";
import SuggestionsList from "./SuggestionsList";
import { useEffect, useState } from "react"
import "./style1.css"

export default function SearchAutoComplete() {
    const products  = 
[
  "iPhone 15",
  "iPhone 15 Pro",
  "Samsung S24",
  "MacBook Pro",
  "MacBook Air",
  "Dell XPS",
  "iPad Pro",
  "AirPods Pro"
];
const [productsFiltred, setProductsFiltred] = useState([]);
 const [searchVal, setSearchVal] = useState("")
 const [suggestionIsOpen , setSuggestionIsOpen] = useState(false)
 const [activeIndex, setActiveIndex] = useState(-1);
 const handleSearchSet = (value) => {
      setSearchVal(value);
      if (value.length < 1) {
        setProductsFiltred([])
        setSuggestionIsOpen(false);
        return
      }
      const newList = products.filter(product=>
        product.toLowerCase().includes(value.toLowerCase())
      ).slice(0,5);
      setProductsFiltred(newList)
      setSuggestionIsOpen(true);
      setActiveIndex(-1);
 }
 
 const handleSuggestionClosing = () => {
    setSuggestionIsOpen(false)
 }
 const handleActiveIndexSet = (arrowDirection) => {
    if(arrowDirection === "down"){
        setActiveIndex(prev => 
            prev < productsFiltred.length - 1
            ? prev + 1
            : 0
        )
    }
    else if(arrowDirection === "up"){
        setActiveIndex(prev => 
            prev > 0
            ? prev - 1
            : prev
        )
    }
 }
 useEffect(()=>{
    console.log(activeIndex);
    
 },[activeIndex])
  return (
    <div>
      <SearchInput 
      searchVal={searchVal} 
      handleSearchSet={handleSearchSet} 
      handleSuggestionClosing={handleSuggestionClosing}
      handleActiveIndexSet={handleActiveIndexSet}
      
      />
      <SuggestionsList 
      productsFiltred={productsFiltred} 
      isOpen={suggestionIsOpen}
      activeIndex={activeIndex} 
      />
    </div>
  )
}
