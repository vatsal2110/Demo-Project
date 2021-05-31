import React from 'react';

function SearchBar()
{
    return (<div class="searchbar">
    <div class="barcontainer">
    <i class="fas fa-search searchicon"></i>
    <input class="search_input" type="search" placeholder="Type to search..." size="190"></input>
    </div>
    <div class="searchbaricons">
    <i class="fas fa-cog searchbaricons searchbaricons2"></i>
    <i class="fas fa-comment-alt searchbaricons searchbaricons2"></i>
    <i class="fas fa-bell searchbaricons searchbaricons2"></i>
    </div>
    <div class="profile">
    <div class="profilegrid">
        <div class="userName">Yash Mehta</div>
        <div class="userOccupation">Developer</div>
    </div>
    <img class="userImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOdZN9FwqzYqEL6SJa7uQNAFQAmepwBR3bg&usqp=CAU"></img>
    </div>
    </div>);
}

export default SearchBar;