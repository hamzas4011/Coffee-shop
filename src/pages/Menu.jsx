import React from 'react';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';
import image1 from '../images/coffee.jpg';
import image2 from '../images/espresso.jpg';
import image3 from '../images/ice-coffe.jpg';
import image4 from '../images/caffe-latte.jpg';
import image5 from '../images/chocolade-milk.jpg';
import image6 from '../images/tea.jpg';
import image7 from '../images/sandwich.jpg';
import image8 from '../images/crossaint.jpg';
import image9 from '../images/muffins.jpg';

function Menu() {
  const menuItems = [
    { image: image1, name: 'Coffee', description: 'A classic brewed drink made from roasted coffee beans for a bold start to your day.', loading: 'lazy' },
    { image: image2, name: 'Espresso', description: 'Rich, intense, and aromatic, perfect for a quick energy boost.', loading: 'lazy' },
    { image: image3, name: 'Ice Coffee', description: 'Cool and refreshing coffee served over ice, ideal for warm days.', loading: 'lazy' },
    { image: image4, name: 'Caffe Latte', description: 'Smooth espresso blended with steamed milk for a creamy texture.', loading: 'lazy' },
    { image: image5, name: 'Chocolate Milk', description: 'A sweet blend of creamy milk and rich chocolate, loved by all ages.', loading: 'lazy' },
    { image: image6, name: 'Tea', description: 'A calming infusion of premium tea leaves, offering warmth and relaxation.', loading: 'lazy' },
    { image: image7, name: 'Sandwich', description: 'Freshly made with savory fillings, perfect for a light and satisfying meal.', loading: 'lazy' },
    { image: image8, name: 'Croissant', description: 'Flaky and buttery pastry, baked to perfection and ideal for any time of day.', loading: 'lazy' },
    { image: image9, name: 'Muffin', description: 'Soft and moist, available in a variety of flavors to suit your taste.', loading: 'lazy' },
  ];

  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
