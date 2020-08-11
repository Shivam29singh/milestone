import React, { Component } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router";
import "./Product.css";
class Product extends Component {
  state = {
    deleteSuccess: false,
    myid: 0,
  };
  deleteId = (id) => {
    console.log("delete friend for received id: " + id);
    axios.delete("http://localhost:3008/productlist/" + id).then(
      (response) => {
        this.setState({ deleteSuccess: true });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  deleteCurrentProduct = () => {
    console.log("delete product with id: " + this.props.id);

    this.deleteId(this.props.id);
  };

  editProductWithId = () => {
    console.log("edit product with id: " + this.props.id);

    this.props.editId(this.props.id);
  };
  getStock = () => {
    console.log(this.props.id);

    this.props.stockId(this.props.id);
  };
  render() {
    if (this.state.deleteSuccess) {
      return <Redirect to="/Home" />;
    }
    if (this.state.myid) {
      return (
        <Redirect
          to={{
            pathname: "/validate",
            state: {
              id: this.state.myid,
            },
          }}
        />
      );
    }
    return (
      <div className="grid">
        <Card style={{ width: 200 }} className="cards">
          <Card.Img
            variant="top"
            src={this.props.image}
            onClick={this.getStock}
          />
          <Card.Body>
            <Card.Title>Product:{this.props.name}</Card.Title>
            <Card.Text>
              Price:
              {this.props.price}
              {/* <Card.Text>Quantity:{this.props.quantity}</Card.Text> */}
              <br />
              <br />
              <button onClick={this.editProductWithId} className="btn-edit">
                Edit
              </button>
              &nbsp;
              <button
                onClick={this.deleteCurrentProduct}
                className="btn-delete"
              >
                Delete
              </button>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Product;
