import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useContext } from "react";
import { ShopContextCustom } from "../../context/shopContextCustom";

const NavbarComponent = () => {
  const { cartItems } = useContext(ShopContextCustom);
  const itemCount = cartItems.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.count;
  }, 0);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>My Brand</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink
              to="/"
              style={{ textDecoration: "none", marginRight: "40px" }}
            >
              Shop
            </NavLink>

            <NavLink to="/cart" style={{ textDecoration: "none" }}>
              <FontAwesomeIcon icon={faShoppingCart} />
              {itemCount > 0 && (
                <span className="cart-item-count">{itemCount}</span>
              )}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
