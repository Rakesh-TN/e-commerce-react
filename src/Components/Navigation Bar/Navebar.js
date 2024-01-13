import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Product from '../Product/Product';
import Home from '../Home/Home';
import singleProduct from '../Product/singleProduct';


function Navebar() {
  return (
    <>
      <BrowserRouter>
        <Navbar expand="lg" className="bg-light">
          <Container>
            <Navbar.Brand>HereBuy </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="">
                <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                <Nav.Link as={Link} to={'/product'}>Products</Nav.Link>
                <Nav.Link href="#cart">Cart <FontAwesomeIcon icon={faCartPlus} style={{ color: "#000000", }} /></Nav.Link>
                <Nav.Link href="#signup/in">Login / Register <FontAwesomeIcon icon={faUser} style={{ color: "#000000", }} /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/singleProduct' element={<singleProduct />}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navebar