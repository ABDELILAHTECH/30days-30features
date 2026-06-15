import { useState } from "react"

export default function NewTicketForm({newTicketFormOpening, addNewTicket}) {
    const [newTicketSubject, setNewTicketSubject] = useState("")
    const [newTicketPriority, setNewTicketPriority] = useState("High")
    return (
    <form className="new-ticket-form" >
        <div>
            <h2>New Ticket</h2>
            <button 
            onClick={newTicketFormOpening}
            className="close-form">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <fieldset>
            <label className="sr-only" htmlFor="ticket-subject">
                Subject
            </label>
            <input placeholder="Ticket subject" 
            value={newTicketSubject}
            onChange={(e) => setNewTicketSubject(e.target.value)}
            type="text" id="ticket-subject" />
        </fieldset>
        <fieldset>
            <label className="sr-only" htmlFor="ticket-priority">
                Priority
            </label>
            <select 
            value={newTicketPriority} 
            onChange={(e) => setNewTicketPriority(e.target.value)}
            name="priority" id="ticket-priority">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </fieldset>
        <button className="add-new-ticket-btn"
        onClick={() => addNewTicket(newTicketSubject, newTicketPriority)}
        >
            Add Ticket
        </button>
    </form>
  )
}
