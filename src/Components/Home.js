import React from 'react'
import "../style/listar.css"
import '../style/banner.css'


const Home = () => {
  return (
    
    <div className="container-fluid divListar">
 
 <div className="container-logo">
      <center><h9 className='our'>PROPIETIE</h9></center>
         <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1653111130/RealMod/Properties_1_jf2hwh.png' alt="logo"/>
         <div className="ATRE">Featured Listings</div>
        </div>
    
        <div className='container-banner'>

<div className='container-searching'>
    <div className='container-filter'>
        <button type='button'>Sell</button>
        <button type='button'>Buy</button>
        <button type='button'>Rent</button>
    </div>


    <div className='container-bar-searching'>

        <input type='text' name='search' placeholder='Enter keyword here ...' />

        <select>
            <option defaultValue>Select Location</option>
            <option>Colombia</option>
            <option>Venezuela</option>
            <option>EE.UU</option>
            <option>CUBA</option>
            <option>CHILE</option>
            <option>HAITI</option>
            <option>TRINIDAD Y TOBAGO</option>
            <option>PERÙ</option>
        </select>

        <div className='container-btn-search'>

            <button type='submit'>
             
                Search
            </button>
        </div>

    </div>
</div>
</div>
  
     <div className="container-logo">
      <center><h9 className='our'>OUR PROPIETIE</h9></center>
         <img src='https://res.cloudinary.com/veronicaduque/image/upload/v1653110895/RealMod/Properties_jelzvq.png' alt="logo"/>
        
        </div>
      <div className="ATRE">Our Featured Properties</div>
     
    </div >
    

  )
}

export default Home