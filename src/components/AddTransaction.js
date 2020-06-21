import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GloabalState';

export const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="">
                    <label htmlFor="">Title</label>
                    <input 
                        type="text" placeholder="Enter Text..." 
                        value={text} onChange={(e) => {setText(e.target.value)}}
                    />
                </div>
                <div className="">
                    <label htmlFor="">Amount</label>
                    <input 
                        type="number" placeholder="Enter Amount..." 
                        value={amount} onChange={(e) => {setAmount(e.target.value)}}
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
