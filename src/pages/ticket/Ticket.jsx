import { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { updateTicket } from '../../context/ticketContext/apiCalls';
import { TicketContext } from '../../context/ticketContext/TicketContext';
import './ticket.css'

export default function Ticket() {
    const location = useLocation();
    const {dispatch} = useContext(TicketContext);
    const history = useHistory();
    let ticket = location.ticket;
    const [newTicketDetali,setNewTicketDetail] = useState(ticket);

    const handleChange = (e) => {
        let value = e.target.value;
        if(value === ""){
            value = null;
        }
        setNewTicketDetail({...newTicketDetali, [e.target.name]:value == null? e.preventDefault() :value});
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        updateTicket(ticket._id,newTicketDetali,dispatch);
        history.push("/tickets");
    }
    return (
        <div className="ticket">
            <span className="ticketUpdateTitle">Edit Ticket</span>
            <div className="createTicketItem">
                <label>Ticket Type</label>
                <input type="text" name="ticketType" id="ticketType" onChange={handleChange} placeholder={ticket.ticketType} />
            </div>
            <div className="createTicketItem">
                <label>Price</label>
                <input type="number" min="0" name="price" id="price" onChange={handleChange} placeholder={ticket.price} />
            </div>
            <div className="createTicketItem">
                <label>Amount limit per day</label>
                <input type="number" min="1" name="amountLimitPerDay" id="amountLimitPerDay" onChange={handleChange} placeholder={ticket.amountLimitPerDay} />
            </div>
            <div className="createTicketItem">
                <label>Minimum Buying</label>
                <input type="number" min="1" name="minimumBuying" id="minimumBuying" onChange={handleChange} placeholder={ticket.minimumBuying} />
            </div>
            <div className="createTicketItem">
                <label>Active</label>
                 <select name="isActive" id="isActive" defaultValue={ticket.isActive} onChange={handleChange}>
                     <option value="true">Yes</option>
                     <option value="false">NO</option>
                 </select>
            </div>
            <button className="createTicketButton" onClick={handleSubmit}>Update</button>
        </div>
    )
}
