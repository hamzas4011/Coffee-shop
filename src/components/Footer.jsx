import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Coffee Shop </p>
      <p> ☕ All rights reserved. Icons by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icons8</a></p>
      <div className="footer-contact">
        <p>📍 Address: 123 Norway, Oslo</p>
        <p>📞 Tel: +123-456-7890</p>
      </div>
      <div className="footer-attribution">
      </div>
    </footer>
  );
}

export default Footer;
