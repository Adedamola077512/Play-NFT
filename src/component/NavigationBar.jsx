
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './NavigationBar.css';
import { CiSearch } from "react-icons/ci";
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
function NavigationBar() {
      // useEffect(() => {
      //     AOS.init({
      //       duration: 2000,
      //       once: true, 
      //     });
      //   }, []);
  return (
    <Navbar expand="lg" id='play' sticky="top" className="py-3">
      <Container>
        <Navbar.Brand href="#" className='CWorld' data-aos="fade-right"><b>Play <span className='NFT'>NFT</span></b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className='NavbarToggle'/>
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto text-center" data-aos="fade-up">
            <Nav.Link href="/home" className='home'>Home</Nav.Link>
            <Nav.Link href="/about" className='home'>Explore</Nav.Link>
            <Nav.Link href="/blog" className='home'>Marketplace</Nav.Link>
            <Nav.Link href="/partner" className='home'>Artist</Nav.Link>
            <Nav.Link href="/faq" className='home'>News</Nav.Link>
          </Nav>
          <input type="text" placeholder="Write here..." name="text" class="input"></input>
          <Button href='/contact' className="contact-btn" data-aos="fade-left">Contacts Us</Button>
        </Navbar.Collapse>      
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
