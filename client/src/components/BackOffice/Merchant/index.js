import React, { useState, useEffect } from 'react';
import useAuth from "../../../hooks/useAuth";

export const Merchant = () => {
    const [transactions, setTransactions] = useState([]);
    const { actions, selectors } = useAuth();

    useEffect(() => {
        const fetchTransaction = async () => {
            const user = selectors.user();
            if(!user) return ;
            const { companyName } = user;
            let response = await fetch(`http://localhost:3000/transactions?companyName=${companyName}`, {
                method: "GET"
            }); 
            response = await response.json();
            setTransactions(response);
        };
        fetchTransaction();
    });

    const formatData = data => {
        return data.map(transaction => {
            return Object.keys(transaction).map(key => (
                 <span>{key} : {transaction[key] }</span>
            ));
        });
    };

    return (
        <>
        { (!selectors.isConnected() && !Boolean(selectors.user()?.KBIS)) 
        ?
            <span> You need to be a connected authorize merchant</span> 
        :
            <>
                <section className="flex justify-center">
                    <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
                        <h1>Transactions</h1>
                        {formatData(transactions)}
                    </div>
                </section>
            </>
        }
        </>
    );
};

export default Merchant;
