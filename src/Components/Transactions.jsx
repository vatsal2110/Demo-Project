import React,{useState} from 'react';
import TransactionTable from'./TransactionTable';

function Transactions()
{
    const [state1,setState1] =useState("selectedtype");
    const [state2,setState2] =useState("dummy");
    const [state3,setState3] =useState("isSelected");
    const [state4,setState4] =useState("dummy");

    function Incoming()
    {
        setState1("selectedtype");
        setState2("dummy");
        setState3("isSelected");
        setState4("dummy");
    }

    function Invoices()
    {
        setState2("selectedtype");
        setState1("dummy");
        setState4("isSelected");
        setState3("dummy");
    }
    
    return (<div class="transactions">
    <div className="theader">
    <p class="theading">Recent Transactions</p>
    <div className="exportbutton">
    <i className="fas fa-upload exporticon"></i>
    <p className="exporttext">Export</p>
    </div>
    </div>
    <div class="transactionlist">
        <div class="transactiontype">
        <div id={state3} class="incoming" onClick={Incoming}><div class="incomingtext">Incoming</div><div class={state1}></div></div>
        <div id={state4} class="invoices" onClick={Invoices}><div class="invoicestext">Invoices</div><div class={state2}></div></div>
        </div>
    </div>
    <hr></hr>
    <TransactionTable/>
    </div>);
}

export default Transactions;