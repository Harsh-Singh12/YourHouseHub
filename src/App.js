import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/HomePage";
import Offers from "./pages/Offers";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PrivateRoute from "./Components/PrivateRoute";
import ForgetPassword from "./pages/ForgetPassword";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import EditListing from "./pages/EditListing"

const App=()=> (
  <>
   <BrowserRouter>
   <ToastContainer />
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/offers" element={<Offers/>} />
    <Route path="/category/:categoryName" element={<Category/>} />
    <Route path="/editlisting/:listingId" element={<EditListing/>} />
    <Route path="/signin" element={<Signin/>} />
    <Route path="/profile" element={<PrivateRoute/>} >
      <Route path="/profile" element={<Profile/>}/>
    </Route>
    <Route path="/signup" element={<Signup/>} />
    <Route path="/contact/:landlordId" element={<Contact/>} />
    <Route path="/forgot-password" element={<ForgetPassword/>} />
    <Route path="/create-listing" element={<CreateListing/>} />
    <Route path="/category/:categoryName/:listingId" element={<Listing/>} />
   
   </Routes>
    <HomePage />
   </BrowserRouter>
     
    </>
  );


export default App;
