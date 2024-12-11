import React from 'react';
import '../styles/MenuItem.css'; 

function MenuItem({ image, name, description }) {
  return (
    <div className="menu-item">
      <img src={image} alt={name} className="menu-item-image" />
      <h3 className="menu-item-name">{name}</h3>
      <p className="menu-item-description">{description}</p>
    </div>
  );
}

export default MenuItem;