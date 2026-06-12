
export default function TagInput({newTagValue, onchange}) {
  return (
    <div className="new-tag-input">
       <label htmlFor="new-tag" className="sr-only">
        New Tag Value
       </label>
       <input type="text" 
       value={newTagValue}
       onChange={e => onchange(e.target.value)}
       placeholder="Add a tag..."
       aria-label="add new tag input"
       id="new-tag"
       />
    </div>
  )
}
