import logo from '../image/Logo.png';
import '../style/App.css';
import { Link, useNavigate } from "react-router-dom";
import '../style/landingPage.css'
import { useEffect } from 'react';

const LandingPage =()=> {
  const navigate =  useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate.push("/home");
    }, 5000);
  }, []);
  return (
    
    <div className="App">
  

      <header className="App-header">
        <img src='https://ventanillavirtual.micm.gob.do/Images/straight-loader.gif' className="App-logo container-logo" alt="logo" />
        <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1652965425/RealMod/Logo_ofgtb3.png' className="App-logo container-logo" alt="logo" />
        <li className="item_nav">
              <Link to="/login"> Continuar</Link>
            </li>
      </header>
      
    </div >
    
  );
}

export default LandingPage;
