import './userList.css'
import { DataGrid } from '@material-ui/data-grid';
import {Delete} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { UserContext } from '../../context/userContext/UserContext';
import { deleteUser, getUsers } from '../../context/userContext/apiCalls';

export default function UserList() {

    const {users,dispatch} = useContext(UserContext);

    useEffect(() =>{
      getUsers(dispatch)
    },[dispatch]);

    const handleDelete = (id)=>{
      deleteUser(id,dispatch);
    };
    const columns = [
        { field: '_id', headerName: 'ID', width: 230 },
        {
          field: 'username',
          headerName: 'UserName',
          width: 150,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'E-mail',
          width: 200,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 100,
          editable: true,
        },
        {
          field: 'fullName',
          headerName: 'Full Name',
          width: 160,
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
        },
        {
          field: 'isActive',
          headerName: 'Status',
          width: 130,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params) => {
              return(
                  <>
                    <Link to={{pathname:"user/edit/" + params.row._id, user:params.row}}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <Delete className="userListDelete" 
                    onClick={() => handleDelete(params.row._id)} />
                  </>
              );
          }
        },
      ];
      
      
    return (
        <div className="userList">
          <Link to="/createUser">
            <button className="userAddButton">Create</button>
          </Link>
          <DataGrid 
            rows={users} 
            columns={columns}
            pageSize={10} 
            disableSelectionOnClick 
            getRowId={(r) => r._id}
          />
        </div>
    )
}
