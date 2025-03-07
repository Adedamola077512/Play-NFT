import React from 'react';
import './Popular.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";

// Import images
import monkey1 from '../assets/monkey-1.png';
import monkey2 from '../assets/monkey-2.png';
import monkey3 from '../assets/monkey-3.png';
import monkey4 from '../assets/monkey-4.png';
import monkey5 from '../assets/monkey-5.png';

const Popular = () => {
  const nftData = [
    { image: monkey1, title: "Comata", author: "Lydia Bonini", price: "2.48 ETH", likes: "59k" },
    { image: monkey2, title: "Veroxse", author: "Jab Bonano", price: "2.42 ETH", likes: "48k" },
    { image: monkey3, title: "Digital Decade", author: "Anthony Longoria", price: "2.45 ETH", likes: "30k" },
    { image: monkey4, title: "Winter Jamz", author: "James Organize", price: "2.37 ETH", likes: "47k" },
    { image: monkey5, title: "Pastel Wiley", author: "Epshe Wallace", price: "2.35 ETH", likes: "44k" },
  ];

  return (
    <div className="popular-container">
      <h1 className="title">Popular this week</h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3} // Default for larger screens
        breakpoints={{
          320: { 
            slidesPerView: 1,
            autoplay: { delay: 3000, disableOnInteraction: false }, // Autoplay only on mobile
          },
          768: { slidesPerView: 2 }, // Tablets
          1024: { slidesPerView: 3 }, // Desktops
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={true} // Keep navigation enabled for larger screens
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]} // Add Autoplay module
        className="swiper_container"
      >
        {nftData.map((nft, index) => (
          <SwiperSlide key={index} className="nft-card">
            <img src={nft.image} alt={nft.title} className="nft-image" />
            <div className="nft-info">
              <div className="nft-flex">
                <h2 className="nft-title">{nft.title}</h2>
                <p className="nft-author">by {nft.author}</p>
              </div>
              <div className="nft-meta">
                <span className="nft-price">{nft.price}</span>
                <span className="nft-likes">💜 {nft.likes}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Popular;
