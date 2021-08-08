import './../ticket/ticket.css'
import { DataGrid } from '@material-ui/data-grid';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function Transaction() {
    const [transactions,setTransactions] = useState([]);
    const location = useLocation();
    useEffect(() =>{
        const getTransactions = async () => {
          const res = await axios.get("/transaction/ticket/" + location.ticket._id, {
            headers:{
              token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken},
          });
          setTransactions(res.data);
        };

        getTransactions();
    },[location]);

    const columns = [
        { field: '_id', headerName: 'ID', width: 190 },
        {
          field: 'ticket',
          headerName: 'Ticket Type',
          width: 150,
        },
        {
          field: 'price',
          headerName: 'Total Price',
          width: 160,
        },
        {
          field: 'buyer',
          headerName: 'Buyer',
          type: 'number',
          width: 210,
        },
        {
          field: 'buyAmount',
          headerName: 'Buy Amount',
          type: 'number',
          width: 160,
        },
        {
          field: 'buyDate',
          headerName: 'Date',
          type:'date',
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
