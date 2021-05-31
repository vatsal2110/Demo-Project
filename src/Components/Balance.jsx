import React from 'react';

function Balance()
{
    return (<div class="balance">
    <div class="balanceheader"><p class="balanceheading">Balance</p><p class="balanceduration">Monthly<img className="balancecon" src="https://img-premium.flaticon.com/png/512/60/60781.png?token=exp=1622316944~hmac=753dadcc6548b4e2cb53ebddc8be5001"></img></p></div>
    <hr></hr>
    <div class="balanceitems">
        <div class="bitem1">
        <p class="bitemheading">Earnings</p>
        <p class="stats">43.41%<span class="bitembutton"> +2.5% </span></p>
        </div>
        <div class="bitem2">
        <p class="bitemheading">Sales Value</p>
        <p class="stats">$95,422<span class="bitembutton"> +13.5% </span></p>
        </div>
    </div>
    <img src="https://vistapointe.net/images/graph-wallpaper-16.jpg" class="graph"></img>
    </div>);
}

export default Balance;