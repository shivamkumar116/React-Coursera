import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImgOverlay,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }
  onSelectDish(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="container">
          <div class="row">
            <div class="col-12 col-md-6">
              <img src={dish.image} />
              <h1>{dish.name}</h1>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-3 mt-1">
          <Card onClick={() => this.onSelectDish(dish)}>
            <CardImg object src={dish.image} alt={dish.name} />
            <CardBody body className="ml-5">
              <CardTitle>{dish.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        {this.renderDish(this.state.selectedDish)}
      </div>
    );
  }
}

export default Menu;
