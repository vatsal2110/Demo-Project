import React,{useState} from 'react';

function Navigation()
{
    const [state,setState] =useState("navdiv");
    function onHover(e)
    {
        setState("hovering");
    }
    function offHover(e)
    {
        setState("navdiv");
    }
    return (<div class="navigate">
    <p className="title"><i class="gg-monday titlecon"></i>Artemis</p>
    <hr></hr>
    <p className="headings">Main</p>
    <div  className="navdiv"><i class="fas fa-tachometer-alt"></i><p className="navlist">Dashboard</p><img className="navcon" src="https://img-premium.flaticon.com/png/512/60/60781.png?token=exp=1622316944~hmac=753dadcc6548b4e2cb53ebddc8be5001"></img></div>
    <div  className="navdiv"><i class="fas fa-globe"></i><p className="navlist">Discover</p><img className="navcon" src="https://img-premium.flaticon.com/png/512/60/60781.png?token=exp=1622316944~hmac=753dadcc6548b4e2cb53ebddc8be5001"></img></div>
    <div  className="navdiv"><i class="fas fa-portrait"></i><p className="navlist">Users</p><img className="navcon" src="https://img-premium.flaticon.com/png/512/60/60781.png?token=exp=1622316944~hmac=753dadcc6548b4e2cb53ebddc8be5001"></img></div>
    <div  className="navdiv"><i class="fas fa-book-open"></i><p className="navlist">Documents</p><img className="navcon" src="https://img-premium.flaticon.com/png/512/60/60781.png?token=exp=1622316944~hmac=753dadcc6548b4e2cb53ebddc8be5001"></img></div>
    <div  className="navdiv"><i class="fas fa-th-large"></i><p className="navlist">Applications</p><img className="navcon" src="https://img-premium.flaticon.com/png/512/60/60781.png?token=exp=1622316944~hmac=753dadcc6548b4e2cb53ebddc8be5001"></img></div>
    <div  className="navdiv"><i class="fas fa-file"></i><p className="navlist">Pages</p><img className="navcon" src="https://img-premium.flaticon.com/png/512/60/60781.png?token=exp=1622316944~hmac=753dadcc6548b4e2cb53ebddc8be5001"></img></div>
    <br></br>
    <p className="headings">Secondary</p>
    <div  className="navdiv"><i class="fas fa-question-circle"></i><p className="navlist">Support Center</p></div>
    <div  className="navdiv"><i class="fas fa-inbox"></i><p className="navlist">Inbox</p></div>
    <div  className="navdiv"><i class="fas fa-folder-open"></i><p className="navlist">File Manager</p></div>
    <div  className="navdiv"><i class="fas fa-list-ul"></i><p className="navlist">Data List</p></div>
    <br></br>
    <div  className="navdiv"><i class="fas fa-cog"></i><p className="navlist">Settings</p></div>
    <div  className="navdiv"><i class="fas fa-sign-out-alt"></i><p className="navlist">Log Out</p></div>
    </div>);
}

export default Navigation;
