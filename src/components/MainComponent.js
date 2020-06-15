import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import Dishdetail from "./DishDetailComponent";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }
  onSelectedDish(dishId) {
    this.setState({ selectedDish: dishId });
  }
  render() {
    return (
      <div>
        <Navbar dark color="success">
          <div className="container">
            <NavbarBrand href="/">Osho Juice Corner</NavbarBrand>
          </div>
        </Navbar>

        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onSelectedDish(dishId)}
        />
        <div className="container">
          <Dishdetail
            dish={
              this.state.dishes.filter(
                (dish) => dish.id === this.state.selectedDish
              )[0]
            }
          />
        </div>
      </div>
    );
  }
}

export default Main;
