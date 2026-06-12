import { useEffect, useState } from "react";
import AddTagButton from "./AddTagButton";
import TagInput from "./TagInput";
import "./style9.scss"
import DeleteTagButton from "./DeleteTagButton";
import DeleteAllButton from "./DeleteAllButton";

export default function TagsSection() {
  const [tags, setTags] = useState(() => {
    const saved = localStorage.getItem("tags");
    return saved ? JSON.parse(saved) : []
  })
  const tagsMax = 5;
  const [newTag, setNewTag] = useState("")
  const handleInputValueChange = (value) => {
    setNewTag(value)
  }
  useEffect(() => {
       localStorage.setItem("tags", JSON.stringify(tags))
  },[tags])
  const addNewTag = (newTag) => {
    const newtag = newTag.trim()
    if (tags.length < 5) {
    if (newtag !== "") {
        const isExiste = tags.find((tag) => newtag.toLowerCase() === tag.name.toLowerCase())
        if (isExiste) {
            alert(`(${newTag}) tag already added`)
        }else{
           setTags(prev => 
           [...prev,
            {
                id:Date.now(),
                name:newtag
            }
           ]
           )
        }
        setNewTag("");
    }else{
        alert('Please enter a tag')
    }  
   }else{
      alert("You reached the maximum of tags") 
   }
  }
  const deleteTag = (id) =>{
    setTags(prev =>
        
        prev.filter(tag =>
            tag.id !== id
        )
    )
  }
  const deleteAllTags = () =>{
    setTags([])
  }
  const HandleEnterClick = (key) =>{
    if (key === "Enter") {
        addNewTag(newTag)
    }
  }

  return (
    <section className="tags-section">
      <h2>Tags</h2>
      <div className="add-tag-container"
      onKeyDown={e => HandleEnterClick(e.key)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
           <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
        </svg>
        <TagInput 
        newTagValue={newTag}
        onchange={handleInputValueChange}
        />
        <AddTagButton
        onclick={() => addNewTag(newTag)}
        />
      </div>

      {
        tags.length >= 1 &&      
        <div className="tags-container">
        <ul className="tags-list">
          {
              tags.map(tag =>
                <li key={tag.id}
                className="tag-item"
                >
                {tag.name}
                <DeleteTagButton 
                onclick={() => deleteTag(tag.id)}
                />
                </li>
              )
          }
        </ul>
        <div style={{color:"chartreuse"}}>
            {`${tags.length} / ${tagsMax} tags`}
        </div>
        <DeleteAllButton 
        onclick={deleteAllTags}
        />
      </div>
      }
    </section>
  )
}
