
export default function SearchTicket(
    {searchValue, searchValueChange}
) {
    const handleOnChange =  (e) => {
        searchValueChange(e.target.value)
    }
  return (
    <div className="search-ticket">
       <label className="sr-only" htmlFor="search-ticket-subject">
         Search Ticket
       </label>
       <input type="text" 
       value={searchValue}
       id="search-ticket-subject"
       placeholder="Search ticket..."
       onChange={(e) => handleOnChange(e)}
       />
    </div>
  )
}
