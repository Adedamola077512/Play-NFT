import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='container'>
        <div className='footer-flex'>
            <div>
                <h4 className='CWorld' id='footer-play'>Play <span className='NFT'>NFT</span></h4>
                <p className='footer-content'>The world’s largest Digital Marketplace for crypto collection and <br />non fungible tokens (NFTs) buy, sell and discover exclusive <br />digital assets</p>
            </div>
            <div>
                <h5>Explore</h5>
                <ul>
                    <li><a href="#">Art</a></li>
                    <li><a href="#">Photograhic</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Games</a></li>
                </ul>
            </div>
            <div>
                <h5>My Account</h5>
                <ul>
                    <li><a href="#">My Profile</a></li>
                    <li><a href="#">My Collection</a></li>
                    <li><a href="#">My Favourite</a></li>
                    <li><a href="#">My Account Settings</a></li>
                </ul>
            </div>
            <div>
                <h5>Resources</h5>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Suggestions</a></li>
                    <li><a href="#">Newsletter</a></li> 
                </ul>
            </div>
            <div>
                <h5>Company</h5>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Ranking</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Activity</a></li>
                </ul>
            </div>
        </div>
        <p className='copyright text-center text-white'>�� 2025 Play NFT. All rights reserved.</p>
    </div>
  )
}

export default Footer