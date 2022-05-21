import React from 'react'
import "../style/listar.css"



const Home = () => {
  return (
    
    <div className="container-fluid divListar">
 
 <div className="container-logo">
      <center><h9 className='our'>PROPIETIE</h9></center>
         <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1653111130/RealMod/Properties_1_jf2hwh.png' alt="logo"/>
         <div className="ATRE">Featured Listings</div>
        </div>
    
 <center><img  className="banner" src="https://res.cloudinary.com/veronicaduque/image/upload/v1653111069/RealMod/Image_fzuogz.png"/></center>
  
     <div className="container-logo">
      <center><h9 className='our'>OUR PROPIETIE</h9></center>
         <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1653110895/RealMod/Properties_jelzvq.png' alt="logo"/>
        
        </div>
      <div className="ATRE">Our Featured Properties</div>
     
    </div >
    

  )
}

export default Home