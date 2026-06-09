
export default function TabButton({tabTitle,active,activeTabChange}) {
  return (
    <button 
    className={`tab-btn ${active ? "active" :""}`} 
    onClick={() => activeTabChange(tabTitle)}
    >
      {tabTitle}
    </button>
  )
}
