import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../src/components/Shared/Header/Header";
import Footer from "../components/Shared/Footer/Footer";
import '../../src/index.css';
import '../../src/app.css'; 
const Main = () => {
  return (
    
    <div>
      <Header />
      
      <Outlet /> {/* This is where nested routes will render */}
      <Footer/>
    </div>
  );
};

export default Main;
