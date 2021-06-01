import React from 'react';
import Chart from './Chart';

function NewUsers()
{
    return (<div class="newusers">
    <p class="nuheading">New Users</p>
    <p class="nuamount">94.2%<span class="nubutton"> +6.9% </span></p>
    <Chart />
    </div>);
}

export default NewUsers;
