import React from 'react';
import '../styles/Home.css';
import image1 from '../images/coffee-shop.jpg';
import image2 from '../images/coffee-shop1.jpg';
import image3 from '../images/coffee-shop2.jpg';
import image4 from '../images/coffee-shop3.jpg';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Coffee Shop</h1>
      <div className="image-grid">
        <img src={image1} alt="Coffee Shop 1" loading="lazy"/>
        <img src={image2} alt="Coffee Shop 2" loading="lazy"/>
        <img src={image3} alt="Coffee Shop 3" loading="lazy"/>
        <img src={image4} alt="Coffee Shop 4" loading="lazy"/>
      </div>
      <div className="about-section">
        <h2>About Coffee Shop</h2>
        <p>
          At Coffee Shop, we are passionate about crafting the perfect coffee experience.
          From selecting the finest beans to creating a cozy ambiance, every detail is designed to make you feel at home.
        </p>
      </div>
    </div>
  );
}

export default Home;
