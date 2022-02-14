import React, {useState} from 'react';
import './Header.css';
const Header = ()=>{
    const [page,setPage]=useState('Home')
  const  click=(page)=>{
        setPage({page})
    }
    return <>
    <div className= 'main-nav'>
            <ul>
            <li><button onClick={()=>click("Home")}>Home</button></li>
            <li><button onClick={()=>click("News")}>News</button></li>
            <li><button onClick={()=>click("Contact")}>Contact</button></li>
            <li><button onClick={()=>click("About")}>About</button></li>
            </ul>
    </div>
    {/*
    How can i use if else here ?
    */}
    </>
}
export default Header;