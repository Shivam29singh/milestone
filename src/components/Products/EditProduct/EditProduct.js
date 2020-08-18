import React from "react";

import axios from "axios";
import "./EditProduct.css";
import { Container } from "react-bootstrap";
class EditProduct extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    console.log(this.props.location);

    console.log(this.props.location.state);

    this.state = {
      name: "",
      price: 0,
      id: 0,
      img: "",
    };
  }

  componentWillMount() {
    if (this.props.location.state !== undefined) {
      axios
        .get(
          "http://localhost:3008/productlist/" + this.props.location.state.myid
        )

        .then(
          (response) => {
            console.log(response);

            this.setState({
              name: response.data.value,

              price: response.data.price,

              id: response.data.id,

              img: response.data.img,
            });
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }

  getPrice = (event) => {
    this.setState({ price: event.target.value });
  };

  getName = (event) => {
    this.setState({ name: event.target.value });
  };

  editProduct = () => {
    console.log("Edit Product via axios and put");

    let productRequestBody = {
      value: this.state.name,

      price: this.state.price,

      img: this.state.img,
    };

    axios
      .patch(
        "http://localhost:3008/productlist/" + this.state.id,
        productRequestBody
      )

      .then(
        (response) => {
          console.log(response);

          this.props.history.push("/Home");
        },
        (error) => {
          console.error(error);
        }
      );
  };

  render() {
    if (this.props.location.state === undefined) {
      return (
        <div>
          <h1>Pl. go to from home page!!!! </h1>
        </div>
      );
    }

    return (
      <Container>
        <div>
          <div>
            <h1>Edit Product with id:{this.props.location.state.myid} </h1>

            <div>
              <h3 style={{ textAlign: "center" }}>Edit Product!!!!</h3>

              <form>
                <label style={{ textAlign: "center" }}>Id: </label>
                <br />

                <input type="number" value={this.state.id} readOnly></input>

                <br></br>

                <label style={{}}>Name: </label>
                <br />

                <input
                  type="text"
                  id="Productname"
                  value={this.state.name}
                  onChange={this.getName}
                ></input>

                <br></br>

                <label>Price: </label>
                <br />

                <input
                  type="number"
                  id="ProductPrice"
                  value={this.state.price}
                  onChange={this.getPrice}
                ></input>

                <br />
                <br />

                <button type="button" onClick={this.editProduct}>
                  Edit Product
                </button>

                <br></br>

                <div>
                  <h4>Preview</h4>
                  Product Name: {this.state.name}
                  <br></br>
                  Product Price: {this.state.price}
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default EditProduct;
