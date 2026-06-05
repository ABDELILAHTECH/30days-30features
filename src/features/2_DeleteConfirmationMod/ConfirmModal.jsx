
export default function ConfirmModal({productTitle, modalClose, productDelete}) {
  const deleteMessage 
= `Are you sure, you want to delete "${productTitle}"`
  
  const handleConfirm = () => {
   modalClose();
   productDelete();        
  }
  const handleCancel = () => {
    modalClose();
  }
  
  
  return (
    <div className="confirm-modal"
    onClick={e => e.stopPropagation()}
    onKeyDown={e=> e.key === "Escape" ? modalClose() : e}
    >
       <button type="button" 
       className="modal-close"
       onClick={modalClose}
       >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
         </svg>
       </button>
       <div>
          <h2>Delete Product</h2>
          <p className="delete-msg">
             {deleteMessage}
          </p>
       </div>
       <div className="buttons">
        <button 
        className="btn cancel-btn"
        onClick={handleCancel}
        >
           CANCEL
        </button>
        <button 
        className="btn confirm-btn"
        onClick={handleConfirm}
        >
            DELETE
        </button>
       </div>
    </div>
  )
}
