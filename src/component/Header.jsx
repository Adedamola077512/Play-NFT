import React from "react";
import "./Header.css";
import { FaVideo } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Import images from assets
import img1 from "../assets/img-1.png";
import ava1 from "../assets/ava1.png";
import ava2 from "../assets/ava2.png";
import ava3 from "../assets/ava3.png";
import ava4 from "../assets/ava4.png";


function Header() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      offset: 200, // Offset from the original trigger point
      once: true, // Animation occurs only once while scrolling
    });
  }, []);
  return (
    <div className="container mt-5">
      <div className="Header-flex">
        {/* Left Side Content */}
        <div>
          <h1 className="header-h1" data-aos="fade-right">
            Discover, Collect <br />
            and Sell Dope <br />
            Art and NFTs
          </h1>
          <p className="header-p" data-aos="fade-right">
            The world's largest digital marketplace for crypto <br />
            collection and non-fungible tokens (NFTs)
          </p>

          {/* Buttons Section */}
          <div className="header-btn-flex">
            <button className="header-btn" data-aos="flip-right">
              <b>Discover</b>
            </button>
            <button className="header-btnn">Create</button>
            <h5 className="header-watch">
              <FaVideo className="FaVideo" /><b> Watch a video</b>
            </h5>
          </div>

          {/* Stats Section */}
          <div className="header-art-flex">
            <p>
              <b>27k +</b> <br />
              <span>Art Work</span>
            </p>
            <p>
              <b>20k +</b> <br />
              <span>Auction</span>
            </p>
            <p>
              <b>7k +</b> <br />
              <span>Artists</span>
            </p>
          </div>

          {/* Profile Avatars */}
          <div className="d-flex mt-2">
            {[ava1, ava2, ava3, ava4].map((avatar, index) => (
              <img
                key={index}
                className={`rounded-circle border border-2 border-white ${
                  index < 3 ? "me-n2" : ""
                }`}
                src={avatar}
                alt={`User ${index + 1}`}
                width="60"
                height="60"
              />
            ))}
          </div>
        </div>

        {/* Right Side Image Section */}
        <div className="header-background" data-aos="fade-left">
          <div className="header-image-container">
            <img src={img1} alt="Featured Artwork" className="img-fluid" />

            <div className="header-bid-info-flex">
              <p>
                <b>Ending in <br /><span>1hr 20m 30s</span></b>
              </p>
              <p>
                <b>Highest bid <br /><span>32.4 ETH</span></b>
              </p>
            </div>

            {/* Bid Buttons */}
            <div className="btn-flex">
              <button className="bid-btn"><b>Place a bid</b></button>
              <button className="purchase-btn"><b>Purchased</b></button>
            </div>
          </div>
        </div>
      </div>
      <div className="header-net">
        <p>Coinbase</p>
        <p>NETFLIX</p>
        <p>BINANCE</p>
        <p>APPLE</p>
        <p>AMAZON</p>
      </div>
    </div>
  );
}

export default Header;
