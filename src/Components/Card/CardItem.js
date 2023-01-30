import React ,{ useState,useEffect } from 'react'
import "./card.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import {Link, BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



const CardItem = () => {

    const [data, setData] = useState([])
    
    
    const fetchData = () => {
      fetch("https://staging.ayzeen.com/api/offers/city-offers?coordinates=32.220102254462454,35.23051887675802&city=61d6e6ac28f4eb6d7e5ccd22")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setData(data)
          const sortedData = [...data].sort((a, b) => b.distance - a.distance)
          setData(sortedData)  
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])

   
  return (

    <div className='divcard'>
      
    {data.map(Supermarket => (
            
             <MDBCard className="card">
             <MDBCardImage className="cardimg" src={Supermarket.storeLogoPictureUrl} position='top' alt='...' />
             <MDBCardBody>
              <MDBCardTitle >{Supermarket.shopName}</MDBCardTitle>
              <MDBCardText>Address : {Supermarket.address} <br/> {Supermarket.locationInstructions}<br/>Phone:  {Supermarket.phone}</MDBCardText>
              
      

                <Link to={`/${Supermarket.id}`}>
     <button type="button" class="btn btn-success btn-rounded" disabled>
         offers
     </button>
 </Link>
             </MDBCardBody>
           </MDBCard>
          
          ))}
          
    </div>
    
      
  
   


   
  )
}

export default CardItem
