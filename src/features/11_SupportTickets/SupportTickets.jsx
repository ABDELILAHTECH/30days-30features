import { useState } from "react"
import SearchTicket from "./SearchTicket"
import TicketsTable from "./TicketsTable"
import "./style11.scss"
import NewTicketForm from "./NewTicketForm"
export default function SupportTickets() {
  const [ tickets ,setTickets] = useState(
  [
  {
    id: 1,
    subject: "Login issue",
    priority: "High",
    status: "Open"
  },
  {
    id: 2,
    subject: "Payment failed",
    priority: "Medium",
    status: "Pending"
  }
  ])
  const [ searchValue, setSearchValue ] = useState("")
  const [ newTicketFormOpen, setNewTicketFormOpen] = useState(false);
  const searchValueChange = (value) => {
      let newSearch = value.trim().toLowerCase();
      setSearchValue(newSearch)
  }
  const filteredTickets = tickets.filter(ticket =>
    ticket.subject.toLowerCase().includes(searchValue)
  )
  const newTicketFormOpening = () => {
      setNewTicketFormOpen(prev => !prev)
  }
  const addNewTicket = (subject,priority) => {
    if (subject.trim() === "") {
      alert("enter a subject")
      return
    }
    setNewTicketFormOpen(false)
    setTickets(prev =>
    [...prev,
      {
        id: tickets.length + 1,
        subject,
        priority,
        status:"Open"
      }
    ]
    )
  }
    return (
    <div className="support-tickets-container">
      {
          newTicketFormOpen && 
          <div className="overlay" >
            <NewTicketForm 
            newTicketFormOpening={newTicketFormOpening}
            addNewTicket={addNewTicket}
            />
          </div>
        }
    <div className="support-tickets">
        <div className="support-tickets-header">
            <h1>Support Tickets</h1>
            <button
            onClick={newTicketFormOpening}
            className="new-ticket-btn">
            +
            </button>
        </div>
        <SearchTicket 
        searchValue = {searchValue}
        searchValueChange = {searchValueChange}
        />
        <TicketsTable 
        tickets={filteredTickets}
        />
    </div>
    </div>

  )
}
