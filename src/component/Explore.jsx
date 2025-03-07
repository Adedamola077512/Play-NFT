import React from 'react'
import './Explore.css'

// import image from asserts
import frame1 from '../assets/Frame1.png'
import frame2 from '../assets/Frame2.png'
import frame3 from '../assets/Frame3.png'
import frame4 from '../assets/Frame4.png'
import frame5 from '../assets/Frame5.png'
import frame6 from '../assets/Frame1.png'
const Explore = () => {
  return (
    <div className='container Explore'>
        <div>
            <h1 className='Artworks'><b>Explore Artworks</b></h1>
            <div className='Explore-flex mt-5'>
                <div className='Explore-card'>
                    <img src={frame1} alt="frame1" className='Explore-img' />
                    <div className='Explore-flex-item'>
                        <h6><b>Abstact</b></h6>
                        <a href="#" className='btn-items'><b>30 items</b></a>
                    </div>
                </div>
                <div className='Explore-card'>
                    <img src={frame2} alt="frame2" className='Explore-img'/>
                    <div className='Explore-flex-item'>
                        <h6><b>Concept Art</b></h6>
                        <a href="#" className='btn-items'>25 items</a>
                    </div>
                </div>
                <div className='Explore-card'>
                    <img src={frame3} alt="frame3" className='Explore-img'/>
                    <div className='Explore-flex-item'>
                        <h6><b>Digital Art</b></h6>
                        <a href="#" className='btn-items'>10 items</a>
                    </div>
                </div>
            </div>



            <div className='Explore-flex mt-4'>
                <div className='Explore-card'>
                    <img src={frame5} alt="frame1" className='Explore-img' />
                    <div className='Explore-flex-item'>
                        <h6><b>Game</b></h6>
                        <a href="#" className='btn-items'><b>30 items</b></a>
                    </div>
                </div>
                <div className='Explore-card'>
                    <img src={frame4} alt="frame2" className='Explore-img'/>
                    <div className='Explore-flex-item'>
                        <h6><b>Graffti</b></h6>
                        <a href="#" className='btn-items'>25 items</a>
                    </div>
                </div>
                <div className='Explore-card'>
                    <img src={frame1} alt="frame3" className='Explore-img'/>
                    <div className='Explore-flex-item'>
                        <h6><b>Watercolor</b></h6>
                        <a href="#" className='btn-items'>10 items</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore