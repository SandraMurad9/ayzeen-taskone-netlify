
import React ,{ useState,useEffect   } from 'react'
import { useParams } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  
  MDBBtn
} from 'mdb-react-ui-kit';
import "./Offer.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Header from '../Header/Header';

const SuperOffers = () => {
  const [data, setData] = useState([])
     const { id } = useParams()
    
    const fetchData = () => {
      fetch("https://staging.ayzeen.com/api/offers/city-offers?coordinates=32.220102254462454,35.23051887675802&city=61d6e6ac28f4eb6d7e5ccd22")
        .then(response => {
          return response.json()
          
        })
        .then(data => {
          setData(data)
           const off = data.find((supermarket) => supermarket._id === id  )
          setData(off)  
          
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])
  return (
    <div>
      <Header />
       <h1 className='off'>{data.shopName} Offers <br/> </h1>
      <div className='divcard'>
     
       {data.offers ? data.offers.map(product => {
           
        
           return (
          
          <MDBCard className="card">
          <MDBCardImage className="cardimg" src={product.productDetails.pictureUrl} position='top' alt='...' />
          <MDBCardBody>
           <MDBCardTitle >{product.productDetails.name}</MDBCardTitle>
           <button type="button" class="btn btn-outline-success btn-rounded" data-mdb-ripple-color="dark">Price: {product.offerPrice} shekel</button>
           {/* <MDBBtn outline rounded color='success'>Price: {product.offerPrice}</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
            
           );
       
       }) : 0 } 
       </div>
    </div> 

  )
}

export default SuperOffers
