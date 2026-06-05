
export default function SearchInput({
    searchVal, handleSearchSet,
    handleSuggestionClosing,
    handleActiveIndexSet
}) {
  const handleKeyDown = (e) => {
  if (e.key === "ArrowDown") {
    handleActiveIndexSet("down");
  }

  if (e.key === "ArrowUp") {
    handleActiveIndexSet("up");
  }
};
  return (
    <input 
    type="text" 
    placeholder="product name"
    value={searchVal}
    onChange={(e) => handleSearchSet(e.target.value)}
    onBlur={handleSuggestionClosing}
    onKeyDown={handleKeyDown}
    />
  )
}
