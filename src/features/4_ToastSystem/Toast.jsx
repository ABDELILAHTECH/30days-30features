
export default function Toast({toast, deleteToast}){
  
  return (
    <div className="toast" style={{backgroundColor:toast.color}}>
      <span>{toast.icon} </span>
      <span>{toast.message}</span>
      <button onClick={deleteToast}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
