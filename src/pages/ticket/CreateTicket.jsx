import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { createTicket } from '../../context/ticketContext/apiCalls';
import { TicketContext } from '../../context/ticketContext/TicketContext';
import './ticket.css'

export default function CreateTicket() {
    const [ticket,setTicket] = useState(null);
    const {dispatch} = useContext(TicketContext)
    const history = useHistory();

    const handleChange = (e) => {
        let value = e.target.value;
        if(value === ""){
            value = null;
        }
        setTicket({...ticket, [e.target.name]:value == null? e.preventDefault() :value});
    }
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        createTicket(ticket,dispatch);
        history.push("/tickets");
    }

    return (
        <div className="createTicket">
            <h1 className="createTicketTitle">New Ticket</h1>
            <div className="createTicketItem">
                <label>Ticket Type</label>
                <input type="text" id="ticketType" name="ticketType" onChange={handleChange}/>
            </div>
            <div className="createTicketItem">
                <label>Price</label>
                <input type="number" min="0"  id="price" name="price" onChange={handleChange}/>
            </div>
            <div className="createTicketItem">
                <label>Amount limit per day</label>
                <input type="number" min="1" id="amountLimitPerDay" name="amountLimitPerDay" onChange={handleChange}/>
            </div>
            <div className="createTicketItem">
                <label>Minimum Buying</label>
                <input type="number" min="1" id="minimumBuying" name="minimumBuying" onChange={handleChange}/>
            </div>
            <div className="createTicketItem">
                <label>Active</label>
                <select name="isActive" id="isActive" defaultValue={true} onChange={handleChange}>
                     <option value="true">Yes</option>
                     <option value="false">NO</option>
                </select>
            </div>
            <button className="createTicketButton" onClick={handleSubmit}>Create</button>
        </div>
    )
}

