import React from 'react'
 import "./home.css";
 import image from '../../photos/image.jpg'
import CardItem from '../Card/CardItem';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
  return (
    
    <div>
      <Header/>
      
       <div className="divsuper">
        <h2>Our Supermarkets</h2>

       </div>
       <div>
         <img class="image-center" src={image} alt="..."></img>
       </div>
       <CardItem />
     
    </div>
  )
}

export default Home
