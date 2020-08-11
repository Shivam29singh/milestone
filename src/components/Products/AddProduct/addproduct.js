import React from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productname: "",
      productprice: 0,
      productcategory: "",
      productimg: "",
      productquantity: 0,
    };
  }

  getName = (event) => {
    this.setState({ productname: event.target.value });
  };

  getPrice = (event) => {
    this.setState({ productprice: event.target.value });
  };

  getQuantity = (event) => {
    this.setState({ productquantity: event.target.value });
  };

  getCategory = (event) => {
    console.log(event.target.value);
    this.setState({ productcategory: event.target.value });
  };

  getImage = (event) => {
    console.log(event.target.value);
    this.setState({ productimg: event.target.value });
    console.log(this.state.productimg);
  };

  addproduct = () => {
    console.log("Add product via axios and post");
    let productRequestBody = {
      value: this.state.productname,
      Price: this.state.productprice,
      //   category_name: this.state.productcategory,
      img: this.state.productimg,
      //   product_quantity: this.state.productquantity,
    };
    axios.post("  http://localhost:3000/productlist", productRequestBody).then(
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
    return (
      <Container>
        <div>
          <h3>Add product!!!!</h3>
          <form>
            <label>Name: </label>
            <br />
            <input type="text" id="productname" onChange={this.getName}></input>
            <br></br>
            <label>Price: </label>
            <br />
            <input
              type="number"
              id="productprice"
              onChange={this.getPrice}
            ></input>
            <br></br>
            {/* <label>Quantity: </label>
          <input
            type="number"
            id="productquantity"
            onChange={this.getQuantity}
          ></input>
          <br></br>
          <label>Category: </label>
          <input
            type="text"
            id="productcategory"
            onChange={this.getCategory}
          ></input>
          <br></br> */}
            <label>Image Url: </label>
            <br />
            <input type="text" id="productimg" onChange={this.getImage}></input>
            <br></br>
            <br />
            <br />
            <button type="button" onClick={this.addproduct}>
              Add product
            </button>
            <br></br>
            <Container>
              <div>
                <h4>Preview</h4>
                Product Name: {this.state.productname}
                <br />
                <br></br>
                Product PRICE: {this.state.productprice}
                <br></br>
              </div>
            </Container>
          </form>
        </div>
      </Container>
    );
  }
}

export default AddProduct;
