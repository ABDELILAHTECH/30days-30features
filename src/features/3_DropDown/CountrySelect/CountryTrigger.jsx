export default function CountryTrigger(
    {
        dropdown, setDropdown , country
    }
) {
  const borderColor = dropdown ? "#0056D2" : "black";
  return (
     <div className="dropdown-trigger" 
     onClick={setDropdown} 
     style={{borderColor:borderColor}} >
      <div className="result">
      {
        country &&
        country.flag
      }
      {
        country &&
        <span>{country.name}</span>
      }
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
