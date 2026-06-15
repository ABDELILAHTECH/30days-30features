
export default function TicketsTable({tickets}) {
  return (
    <table className="tickets-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Subject</th>
                <th>Priority</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {
            tickets.map(ticket => 
                <tr key={ticket.id}> 
                    <td>#{ticket.id}</td>
                    <td>{ticket.subject}</td> 
                    <td>{ticket.priority}</td>
                    <td>{ticket.status}</td>
                </tr>    
            )
            }
        </tbody>
    </table>
  )
}
