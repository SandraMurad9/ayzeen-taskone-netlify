import React from 'react'
import "./Header.css";
import logo from '../../photos/logo.png'
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBCol } from "mdbreact";
import { Cart3,PersonCircle,Pass } from 'react-bootstrap-icons';

const Header = () => {
  return (
    <div>
      
      <nav className="navBar">
        <div>
          <img class="logo" src={logo} alt="..."></img>
        </div>
        <div className="search">
            <MDBCol  md="6" >
             <div className="active-pink-3 active-pink-4 mb-4">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            </div>
        </MDBCol>
        </div>
        
        <div className="icons">
            <Pass  class="icon"/>  
               
        </div> 
        <p>orders</p> 
        <div className="icons">
            
          <Cart3  class="icon"/>       
        </div>
       <p>cart</p> 
        <div className="icons">
        <PersonCircle  class="icon"/>      
        </div>
        <p>profile</p>

            
       
      </nav>
    </div>
  )
}

export default Header
