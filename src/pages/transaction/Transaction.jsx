import './../ticket/ticket.css'
import { DataGrid } from '@material-ui/data-grid';
import { useContext, useEffect } from 'react';
import { getTransactions } from '../../context/trasaction/apiCalls';
import { useLocation } from 'react-router-dom';
import { TransactionContext } from '../../context/trasaction/TransactionContext';

export default function Transaction() {
    const {transactions,dispatch} = useContext(TransactionContext);
    const location = useLocation();
    let ticket = location.ticket;
    let ticketId = ticket._id;
    useEffect(() =>{
        getTransactions(ticketId,dispatch)
    },[ticketId,dispatch]);

    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        {
          field: 'ticket',
          headerName: 'Ticket Type',
          width: 150,
        },
        {
          field: 'price',
          headerName: 'Total Price',
          width: 130,
        },
        {
          field: 'buyer',
          headerName: 'Buyer',
          type: 'number',
          width: 210,
        },
        {
          field: 'buyAmount',
          headerName: 'AmountBuyer',
          type: 'number',
          width: 130,
        },
        {
          field: 'buyDate',
          headerName: 'Date',
          width: 180,
        }
      ];
      
    return (
        <div className="transaction">
          <DataGrid 
            rows={transactions} 
            columns={columns} 
            pageSize={10} 
            disableSelectionOnClick
            getRowId={(r) => r._id}
          />
        </div>
    )
}
