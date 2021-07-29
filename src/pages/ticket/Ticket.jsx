import { useLocation } from 'react-router-dom'
import './ticket.css'

export default function Ticket() {
    const location = useLocation();
    let ticket = location.ticket;
    return (
        <div className="ticket">
            <span className="ticketUpdateTitle">Edit Ticket</span>
            <div className="createTicketItem">
                <label>Ticket Type</label>
                <input type="text" placeholder={ticket.ticketType} />
            </div>
            <div className="createTicketItem">
                <label>Price</label>
                <input type="number" min="0" placeholder={ticket.price} />
            </div>
            <div className="createTicketItem">
                <label>Amount limit per day</label>
                <input type="number" min="1" placeholder={ticket.amountLimitPerDay} />
            </div>
            <div className="createTicketItem">
                <label>Minimum Buying</label>
                <input type="number" min="1" placeholder={ticket.minimumBuying} />
            </div>
            <div className="createTicketItem">
                <label>Active</label>
                 <select name="isActive" id="isActive" defaultValue={ticket.isActive}>
                     <option value="true">Yes</option>
                     <option value="false">NO</option>
                 </select>
            </div>
            <button className="createTicketButton">Update</button>
        </div>
    )
}
