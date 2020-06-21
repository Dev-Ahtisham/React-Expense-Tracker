import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const intialState = {
    transactions: []
}

// Create Global Context
export const GlobalContext = createContext(intialState);

 // Create Provider For Global Context
 export const GlobalProvider = ({children}) => {
     const [state, dispatch] = useReducer(AppReducer, intialState);

     // Actions
     const deleteTransaction = (id) => {
         dispatch({
             type: 'DELETE_TRANSACTION',
             payload: id
         });
     }

     const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

     return(
         <GlobalContext.Provider value={{
             transactions: state.transactions,
             deleteTransaction,
             addTransaction
         }}>
             {children}
         </GlobalContext.Provider>    
     )
 }