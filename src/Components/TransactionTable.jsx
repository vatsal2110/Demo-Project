import React from 'react';

function TransactionTable() {
  return (
    <div class="transactiontable">
    <table>
  <tr class="trow">
    <th>Invoice ID<i class="fas fa-sort sort"></i></th>
    <th>Date<i class="fas fa-sort sort"></i></th>
    <th>Description<i class="fas fa-sort sort"></i></th>
    <th>Status<i class="fas fa-sort sort"></i></th>
    <th>Description<i class="fas fa-sort sort"></i></th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>08.04.2021</td>
    <td>59281</td>
    <td><span class="titembutton"> Completed </span></td>
    <td>$2,500.00</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>08.04.2021</td>
    <td>59281</td>
    <td><span class="titembutton"> Completed </span></td>
    <td>$2,500.00</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>08.04.2021</td>
    <td>59281</td>
    <td><span class="titembutton"> Completed </span></td>
    <td>$2,500.00</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>08.04.2021</td>
    <td>59281</td>
    <td><span class="titembutton"> Completed </span></td>
    <td>$2,500.00</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>08.04.2021</td>
    <td>59281</td>
    <td><span class="titembutton"> Completed </span></td>
    <td>$2,500.00</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>08.04.2021</td>
    <td>59281</td>
    <td><span class="titembutton"> Completed </span></td>
    <td>$2,500.00</td>
  </tr>
</table>
    </div>
  );
}

export default TransactionTable;
