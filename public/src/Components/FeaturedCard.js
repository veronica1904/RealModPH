import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import "../style/FeaturedCard.css";

function FeaturedCards() {
  const data = [
    {
      icon: "https://res.cloudinary.com/dwbno71qd/image/upload/v1653254028/Realmod/parking-area_1_nmpkt0.png",
      description: "Parking Space"
    },
    {
      icon: "https://res.cloudinary.com/dwbno71qd/image/upload/v1653254028/Realmod/parking-area_1_nmpkt0.png",
      description: "Parking Space"
    },
    {
      icon: "https://res.cloudinary.com/dwbno71qd/image/upload/v1653254028/Realmod/parking-area_1_nmpkt0.png",
      description: "Parking Space"
    },
    {
      icon: "https://res.cloudinary.com/dwbno71qd/image/upload/v1653254028/Realmod/parking-area_1_nmpkt0.png",
      description: "Parking Space"
    },
    {
      icon: "https://res.cloudinary.com/dwbno71qd/image/upload/v1653254028/Realmod/parking-area_1_nmpkt0.png",
      description: "Parking Space"
    },
    {
      icon: "https://res.cloudinary.com/dwbno71qd/image/upload/v1653254028/Realmod/parking-area_1_nmpkt0.png",
      description: "Parking Space"
    },
    {
      icon: "https://res.cloudinary.com/dwbno71qd/image/upload/v1653254028/Realmod/parking-area_1_nmpkt0.png",
      description: "Parking Space"
    },
    {
      icon: "https://res.cloudinary.com/dwbno71qd/image/upload/v1653254028/Realmod/parking-area_1_nmpkt0.png",
      description: "Parking Space"
    }
  ]
  return (
    <section className="section-container">
      <div class="contenedor">
        <img src="https://res.cloudinary.com/veronicaduque/image/upload/v1653111006/RealMod/Our_Agents_ixzutp.png" />
        <div class="centrado">
          <span>Properties</span>
          <p>Featured Listings</p>

        </div>
      </div>
      <div className='containerListings'>
        {data.map((item) => <Card sx={{ maxWidth: 307 }} >

          <CardContent className="FeaturedCard" >
            <div className='contentIcon'>
              <img src={item.icon} />
            </div>
            <div className='featuredText'>
              <span>{item.description}</span>
            </div>
          </CardContent>
          
          <span className='circleIconArrow'> <img  src="https://res.cloudinary.com/veronicaduque/image/upload/v1653264683/RealMod/flecha_rrqfo2.png"/></span>
  
        </Card>)

        }

      </div>

    </section>
  )
}

export default FeaturedCards