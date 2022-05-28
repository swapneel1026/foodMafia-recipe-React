import React from "react";
import "./UpperSection.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import chef from "../assets/chef.svg";
import plate from "../assets/plate.svg";

const UpperSection = () => {
  return (
    <div className="section-upper">
      <Navbar bg="none" variant="light" className="sectionUpper-Navbar">
        <Container>
          <Nav className="me-auto navbarItems ">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Receipes</Nav.Link>
            <Nav.Link href="#">Resturants</Nav.Link>
          </Nav>
          <Navbar.Brand className="nav-followIcons">
            Follow Us
            <div className="followIcons">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar.Brand className="brandName">FoodMafia</Navbar.Brand>
      <img src={chef} alt="chefImage" className="chefImage" />
      <img src={plate} alt="plateImage" className="plateImage" />
    </div>
  );
};

export default UpperSection;
