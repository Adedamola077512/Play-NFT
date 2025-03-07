import React from 'react';
import './Topseller.css';

// Import images
import ava1 from '../assets/ava1.png';
import ava2 from '../assets/ava2.png';
import ava3 from '../assets/ava3.png';
import ava4 from '../assets/ava4.png';
import ava5 from '../assets/ava5.png';
import ava6 from '../assets/ava6.png';
import ava7 from '../assets/ava7.png';
import ava8 from '../assets/ava8.png';

const topSellers1 = [
  { image: ava1, name: 'Leiton Karmer', price: '32.4 ETH' },
  { image: ava2, name: 'John Barner', price: '32.4 ETH' },
  { image: ava3, name: 'Haylie Karmer', price: '32.4 ETH' },
  { image: ava4, name: 'Seige Fentes', price: '32.4 ETH' },
];

const topSellers2 = [
  { image: ava5, name: 'Jeremy Bruch', price: '32.4 ETH' },
  { image: ava6, name: 'Leiton Karmer', price: '32.4 ETH' },
  { image: ava7, name: 'Daigo Bentley', price: '32.4 ETH' },
  { image: ava8, name: 'Bowen Haggie', price: '32.4 ETH' },
];

const Topseller = () => {
  return (
    <div className="container Top-seller">
      <h1 className='top'><b>Top Seller</b></h1>
      <marquee behavior="scroll" direction="right">
        <div className="Top-flex">
          {topSellers1.map((seller, index) => (
            <div key={index} className="Top-flex-item">
              <img src={seller.image} alt={seller.name} className="Top-img" />
              <div className="Top-line">
                <h6><b>{seller.name}</b></h6>
                <p><b>{seller.price}</b></p>
              </div>
            </div>
          ))}
        </div>
      </marquee>

      <marquee behavior="scroll" direction="left">
        <div className="Top-flex mt-5">
          {topSellers2.map((seller, index) => (
            <div key={index} className="Top-flex-item">
              <img src={seller.image} alt={seller.name} className="Top-img" />
              <div className="Top-line">
                <h6><b>{seller.name}</b></h6>
                <p><b>{seller.price}</b></p>
              </div>
            </div>
          ))}
        </div>
      </marquee>
    </div>
  );
};

export default Topseller;
