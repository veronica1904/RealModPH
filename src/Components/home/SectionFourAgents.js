import React from "react";
import { Card } from "@mui/material";
import "../../style/sectionFourAgents.css";

export default function SectionFourAgents() {
  const data = [
    {
      image:
        "https://res.cloudinary.com/veronicaduque/image/upload/v1653254948/RealMod/Rectangle_47_jecjz7.png",
      name: "Andren Willium",
      lastName: "Sweet  Home",
      phone: "+121 511 4522",
    },
    {
      image:
        "https://res.cloudinary.com/veronicaduque/image/upload/v1653254948/RealMod/Rectangle_47_1_iubeup.png",
      name: "Polly Martzinger",
      lastName: "Sweet  Home",
      phone: "+121 511 4522",
    },
    {
      image:
        "https://res.cloudinary.com/veronicaduque/image/upload/v1653254948/RealMod/Rectangle_47_2_jkje4o.png",
      name: "Sarah Boysen",
      lastName: "Marl Street",
      phone: "+121 511 4522",
    },
    {
      image:
        "https://res.cloudinary.com/veronicaduque/image/upload/v1653254947/RealMod/Rectangle_47_3_vod2mj.png",
      name: "Mac. Willium",
      lastName: "Eco Bulider",
      phone: "+121 511 4522",
    },
  ];

  return (
    <section className="section-container">
      <div class="contenedor">
        <img src="https://res.cloudinary.com/veronicaduque/image/upload/v1653111006/RealMod/Our_Agents_ixzutp.png" />
        <div class="centrado">
            <span>EXperties is here</span>
            <p>Our Exclusive Agents</p>
            
        </div>
      </div>
      <div className="containerAgents">
        {data.map((item) => (
          <Card sx={{ width: 270, minHeight: 275 }}>
            <img src={item.image} className="image-card-agents" />
            <div className="description-card">
              <p>{item.name}</p>
              <span>{item.lastName}</span>
              <div className="container-contact">
                <img src="https://res.cloudinary.com/veronicaduque/image/upload/v1653259701/RealMod/fi-rr-call-outgoing_uivqzu.png" />
                <p> Call: {item.phone}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
