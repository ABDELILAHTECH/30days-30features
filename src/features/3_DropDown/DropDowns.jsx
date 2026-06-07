import CountrySelect from "./CountrySelect/CountrySelect";
import IngredientsSelect from "./IngredientsSelect/IngredientsSelect";
import "./style3.scss"
export default function DropDown() {
  return (
    <div style={{marginTop:"100px", display:"flex", gap:"40px"}}>
       <CountrySelect />
       <IngredientsSelect />
    </div>
  )
}
