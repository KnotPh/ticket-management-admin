import './ticket.css'
import { DataGrid } from '@material-ui/data-grid';
import {Delete} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { TicketContext } from "../../context/ticketContext/TicketContext";
import { deleteTicket, getTickets } from '../../context/ticketContext/apiCalls';

export default function TicketList() {
    const {tickets,dispatch} = useContext(TicketContext);

    useEffect(() =>{
        getTickets(dispatch)
    },[dispatch]);
  
    const handleDelete = (id)=>{
      deleteTicket(id,dispatch);
    };
    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        {
          field: 'ticketType',
          headerName: 'Ticket Type',
          width: 150,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 130,
        },
        {
          field: 'amountLimitPerDay',
          headerName: 'Amount limit per day',
          type: 'number',
          width: 210,
        },
        {
          field: 'isActive',
          headerName: 'Status Active',
          width: 180,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 210,
          sortable:false,
          renderCell: (params) => {
              return(
                  <>                   
                    <Link to={{pathname:"/transaction/ticket/" + params.row._id , ticket:params.row}}>
                        <button className="ticketListReport">Report</button>
                    </Link>
                    <Link to={{pathname:"ticket/edit/"+params.row._id, ticket:params.row}}>
                        <button className="ticketListEdit">Edit</button>
                    </Link>
                    <Delete className="ticketListDelete" 
                    onClick={() => handleDelete(params.row._id)} />
                  </>
              );
          }
        },
      ];
      
    return (
        <div className="ticketList">
          <Link to="/createTicket">
            <button className="ticketAddButton">Create</button>
          </Link>
          <DataGrid 
            rows={tickets} 
            columns={columns} 
            pageSize={10} 
            disableSelectionOnClick
            getRowId={(r) => r._id}
          />
        </div>
    )
}
