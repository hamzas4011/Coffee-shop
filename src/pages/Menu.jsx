import React from 'react';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';

function Menu() {
  const menuItems = [
    { image: '/images/coffee.jpg', name: 'Coffee', description: 'A classic brewed drink made from roasted coffee beans for a bold start to your day.', loading: 'lazy' },
    { image: '/images/espresso.jpg', name: 'Espresso', description: 'Rich, intense, and aromatic, perfect for a quick energy boost.', loading: 'lazy' },
    { image: '/images/ice-coffe.jpg', name: 'Ice Coffee', description: 'Cool and refreshing coffee served over ice, ideal for warm days.', loading: 'lazy' },
    { image: '/images/caffe-latte.jpg', name: 'Caffe Latte', description: 'Smooth espresso blended with steamed milk for a creamy texture.', loading: 'lazy' },
    { image: '/images/chocolade-milk.jpg', name: 'Chocolate Milk', description: 'A sweet blend of creamy milk and rich chocolate, loved by all ages.', loading: 'lazy' },
    { image: '/images/tea.jpg', name: 'Tea', description: 'A calming infusion of premium tea leaves, offering warmth and relaxation.', loading: 'lazy' },
    { image: '/images/sandwich.jpg', name: 'Sandwich', description: 'Freshly made with savory fillings, perfect for a light and satisfying meal.', loading: 'lazy' },
    { image: '/images/crossaint.jpg', name: 'Croissant', description: 'Flaky and buttery pastry, baked to perfection and ideal for any time of day.', loading: 'lazy' },
    { image: '/images/muffins.jpg', name: 'Muffin', description: 'Soft and moist, available in a variety of flavors to suit your taste.', loading: 'lazy' },
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
