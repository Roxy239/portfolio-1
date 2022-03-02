import { Link } from 'react-router-dom';
import {  Nav } from 'react-bootstrap';
import React from 'react';

const Navbar = () => {
  return (
    
    <div>
      <nav className="navbar">
       <Nav.Link as={Link} to="/home"> <i className="fas fa-home"></i> <span>home</span> </Nav.Link>
        {/* <Nav.Link as={Link} to="/mylist">TourList</Nav.Link> */}
        <Nav.Link as={Link} to="/about">  <i className="fas fa-user"></i> <span>about</span> </Nav.Link>
        <Nav.Link as={Link} to="/portfolio">  <i className="fas fa-briefcase"></i> <span>portfolio</span></Nav.Link>
        
        <Nav.Link as={Link} to="/contact"> <i className="fas fa-address-book"></i> <span>contact</span></Nav.Link>
        <Nav.Link as={Link} to="/blogs">  <i className="fas fa-blog"></i> <span>blogs</span></Nav.Link>

     </nav>
    </div>
  );
};

export default Navbar;
// function Navbar() {
//   return (
//     <nav className="navbar">
//         <Nav.Link as={Link} to="/home"> <i className="fas fa-home"></i> <span>home</span> </Nav.Link>
//         {/* <Nav.Link as={Link} to="/mylist">TourList</Nav.Link> */}
//         <a href="about.html"> <i className="fas fa-user"></i> <span>about</span> </a>
//         <a href="portfolio.html"> <i className="fas fa-briefcase"></i> <span>portfolio</span> </a>
//         <a href="blogs.html"> <i className="fas fa-blog"></i> <span>blogs</span> </a>
//         <a href="contact.html"> <i className="fas fa-address-book"></i> <span>contact</span> </a>
//     </nav>
//   );
// }

// export default Navbar;


{/* <nav class="navbar">
    <a href="home.html"> <i class="fas fa-home"></i> <span>home</span> </a>
    <a href="about.html"> <i class="fas fa-user"></i> <span>about</span> </a>
    <a href="portfolio.html"> <i class="fas fa-briefcase"></i> <span>portfolio</span> </a>
    <a href="blogs.html"> <i class="fas fa-blog"></i> <span>blogs</span> </a>
    <a href="contact.html"> <i class="fas fa-address-book"></i> <span>contact</span> </a>
</nav> */}