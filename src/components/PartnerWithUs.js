import React from 'react';

const restaurants = [
  { name: 'CCSU Canteen', photo: '/Prequel-lead.webp' },
  { name: 'SCRIET Canteen', photo: '/Prequel-lead.webp' },
  { name: 'Bengal sweets house', photo: "/Prequel-lead.webp" },
  { name: 'Mehta Restaurent', photo: '/Prequel-lead.webp' },
  { name: 'Mini the Dhaba', photo: '/Prequel-lead.webp' },
  // Add more restaurants as needed
];

const PartnerWithUs = () => {
  return (
    <div className="partner-with-us">
      <h1>Partner With Us</h1>
      <p>Join our network of top-notch restaurants and reach more customers.</p>
      <div className="restaurant-list">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-item">
            <img src={restaurant.photo} alt="Placeholder" className="restaurant-photo" />
            <h2>{restaurant.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerWithUs;
