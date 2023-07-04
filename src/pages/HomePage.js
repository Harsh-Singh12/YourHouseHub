import React from 'react'
import {useNavigate} from 'react-router-dom'
import Layout from '../Components/Layouts/Layout'
import "../styles/homepage.css";
import Slider from '../Components/Slider';


const HomePage = () =>{
  const navigate =useNavigate()
  const img1= "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
   const img2 ="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
  return(
    <Layout>
    <Slider />
    <div className="home-cat row d-flex align-items-center justify-content-center">
      <h1>Category</h1>
      <div className="col-md-5 ">
        <div className="Imagecontainer">
          <img src={img1} alt="Rent" style={{ width: "100%" }} />
          <button className="btn" onClick={() => navigate("/category/rent")}>
            FOR RENT
          </button>
        </div>
      </div>
      <div className="col-md-5">
        <div className="Imagecontainer">
          <img src={img2} alt="Rent" style={{ width: "100%" }} />
          <button className="btn" onClick={() => navigate("/category/sale")}>
            FOR SALE
          </button>
        </div>
      </div>
    </div>
  </Layout>
    );  
    };

export default HomePage;