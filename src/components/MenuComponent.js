import React, { Component } from "react";
import { Card, CardImgOverlay, CardTitle, CardImg } from "reactstrap";
import DishDetail from "./DishDetailComponent";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="container">
          <div class="row">
            <div class="col-12 col-md-6">
              <img src={dish.image} width="100%" alt={dish.name} />
              <h1>{dish.name}</h1>
              <p>{dish.description}</p>
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
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <DishDetail dish={this.state.selectedDish}></DishDetail>
      </div>
    );
  }
}

export default Menu;
