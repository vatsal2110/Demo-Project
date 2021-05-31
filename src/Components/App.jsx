import React from 'react';
import Transactions from './Transactions';
import Balance from './Balance';
import NewUsers from './NewUsers';
import Income from './Income';
import SearchBar from './SearchBar';

function App() {
  return (
    <div class="rightside">
    <SearchBar/>
      <div class="grid">
        <Income/>
        <Balance/>
        <NewUsers/>
      </div>
      <Transactions/>
    </div>
  );
}

export default App;
