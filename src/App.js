import React from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";

function App() {
  return (
    <Navbar dark color="danger">
      <div className="container">
        <NavbarBrand href="/">My App</NavbarBrand>
      </div>
    </Navbar>
  );
}

export default App;
