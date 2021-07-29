import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { TicketContextProvider } from './context/ticketContext/TicketContext';
import { UserContextProvider } from './context/userContext/UserContext';
import { TransactionContextProvider } from './context/trasaction/TransactionContext';

axios.defaults.baseURL = "http://localhost:8800/api/";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TicketContextProvider>
        <UserContextProvider>
          <TransactionContextProvider>
            <App />
          </TransactionContextProvider>
        </UserContextProvider>
      </TicketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
