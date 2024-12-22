import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Coffee Shop</h1>
      <div className="image-grid">
        <img src="/images/coffee-shop.jpg" alt="Coffee Shop 1" loading="lazy" />
        <img src="/images/coffee-shop1.jpg" alt="Coffee Shop 2" loading="lazy" />
        <img src="/images/coffee-shop2.jpg" alt="Coffee Shop 3" loading="lazy" />
        <img src="/images/coffee-shop3.jpg" alt="Coffee Shop 4" loading="lazy" />
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
