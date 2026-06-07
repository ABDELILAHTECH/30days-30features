
export default function ListItem({country, CountrySelection}) {
  return (
    <li className={`list-item `}
    onClick={() => CountrySelection(country)}
    >
       <span className="country-flag">
        {country.flag}
       </span>
       <span className="country-name">
        {country.name}
       </span>
    </li>
  )
}
