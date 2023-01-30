import React from 'react'
import "./Header.css";
import logo from '../../photos/logo.png'



const Header = () => {
  return (
    <div>
      
      <nav className="navBar">
        <div>
          <img class="logo" src={logo} alt="..."></img>
        </div>
        <div className="search">
           
             <div className="active-pink-3 active-pink-4 mb-4">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            </div>
      
        </div>
        
       
        <p>orders</p> 
        
       <p>cart</p> 
        
        <p>profile</p>

            
       
      </nav>
    </div>
  )
}

export default Header
