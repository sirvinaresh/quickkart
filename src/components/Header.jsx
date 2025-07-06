import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { RiShoppingBag3Line } from "react-icons/ri";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { HiBars3CenterLeft } from "react-icons/hi2";
import logo from '../images/canvas-logo.png';
import { Link,  NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cart = useSelector((state)=>state.cart.value);

  return (
    <Navbar expand="lg" className="shadow" sticky="top" style={{backgroundColor:'#002F6C'}}>
      <Container className="py-2 text-light ">
        <HiBars3CenterLeft className="fs-3 me-5" onClick={handleShow}/>
        <Navbar.Brand ><img src={require('../images/nav-logo.png')} alt="" className="w-25 img-fluid" /></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto gap-4">
            <NavLink className="text-light nav-link" to="/">Home</NavLink>
            <NavLink className="text-light nav-link" to="shop">Shop </NavLink>
            <NavLink className="text-light nav-link" to="search">Search Page</NavLink>
            <NavLink className="text-light nav-link" to="blog">Blog</NavLink>
            <NavLink className="text-light nav-link" to="fq">FAQs</NavLink>
            <NavLink className="text-light nav-link" to="tc">Terms & Conditions</NavLink>
            <NavLink className="text-light nav-link" to="contact">Contact</NavLink> 
            <button type="button" class=" position-relative" style={{backgroundColor:'transparent' ,border:"none"}}>
              <Link to='cart'> <RiShoppingBag3Line className="fs-4 text-light"  /> </Link>
              <span  class="position-absolute start-10 translate-middle badge rounded-pill bg-danger " style={{top:'20%'}}>
                {cart}
              </span>
            </button>
          </Nav>
        </Navbar.Collapse>


        {/* navbar canvas */}
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><img src={logo} alt="" className="w-50 mt-2"/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="ms-3 gap-3">
            <NavLink className="text-black nav-link canva" onClick={handleClose} to="/">Home</NavLink>
            <NavLink className="text-black nav-link canva" onClick={handleClose} to="shop">Shop </NavLink>
            <NavLink className="text-black nav-link canva" onClick={handleClose} to="search">Search Page</NavLink>
            <NavLink className="text-black nav-link canva" onClick={handleClose} to="blog">Blog</NavLink>
            <NavLink className="text-black nav-link canva" onClick={handleClose} to="fq">FAQs</NavLink>
            <NavLink className="text-black nav-link canva" onClick={handleClose} to="tc">Terms & Conditions</NavLink>
            <NavLink className="text-black nav-link canva" onClick={handleClose} to="contact">Contact</NavLink>
            <NavLink className="text-black nav-link canva" onClick={handleClose} to="cart" >My Cart</NavLink>
          </Nav>
         </Offcanvas.Body>
      </Offcanvas>

      </Container>
    </Navbar>
    
  );
}

export default Header;
