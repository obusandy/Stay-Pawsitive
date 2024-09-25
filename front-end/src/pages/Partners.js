import React from "react";
import "./Partners.css";
import partner1 from "../pages/Images/partner1.jpg";
import partner2 from "../pages/Images/partner2.jpg";
import partner3 from "../pages/Images/partner3.jpg";

const Partners = () => {
  const partnersList = [
    { id: 1, name: "Partner 1", logo: partner1 },
    { id: 2, name: "Partner 2", logo: partner2 },
    { id: 3, name: "Partner 3", logo: partner3 },
    // Add more partners as needed
  ];

  return (
    <div className="partners-container">
      <h1>Our Partners</h1>
      <div className="partners-logos">
        {partnersList.map((partner) => (
          <div key={partner.id} className="partner-logo">
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
