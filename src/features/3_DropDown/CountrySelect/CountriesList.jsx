import CountryItem from "./CountryItem"
export default function CountriesList({countries, CountrySelection}) {
  return (
    <ul className="dropdown-list">
        {
          countries.map(country =>
            <CountryItem 
            key={country.id}
            country={country} 
            CountrySelection={CountrySelection} 
            />
          )
        }
    </ul>
  )
}
