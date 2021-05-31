import React from 'react';

function Income()
{
    return (<div class="income">
    <p class="incomeheading">Total Income</p>
    <p class="incomeamount">$124,563.00<span class="incomebutton"> +6.9% </span></p>
    <div className="progressbar"><span className="progressdone"></span><span className="progressleft"></span></div>
    <div class="incomefooter">Yearly Goal</div>
    </div>);
}

export default Income;