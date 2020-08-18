import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Product from "../../components/Products/Product/Product";
import axios from "axios";
import "./Home.css";
import { Form, Button } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      searchFriends: [],
      categoryProducts: [],
      searchValue: "",

      myid: 0,
    };
  }

  componentWillMount() {
    this.getAllProducts();
  }

  componentDidMount() {
    // console.log(this.props);
  }

  intializeState = () => {
    setTimeout(() => {
      this.setState({ deleteSuccess: false });
    }, 2000);
  };
  editProductWithId = (id) => {
    this.setState({ myid: id });
    console.log("Edit friend with id: " + id);
    this.props.history.push({
      pathname: "/editproduct",
      state: { myid: id },
    });
  };
  getAllProducts = () => {
    axios.get(" http://localhost:3008/productlist").then(
      (response) => {
        console.log(response);

        console.log(response.data);

        this.setState({ productList: response.data });

        this.setState({ searchProducts: response.data });

        this.setState({ categoryProducts: response.data });

        console.log(this.state.productList);
      },

      (error) => {
        console.error(error);
      }
    );
  };

  openAddProduct = () => {
    this.props.history.push("/addProduct");
  };

  getSearch = (e) => {
    let searchV = e.target.value;
    if (searchV === "") {
      this.getAllProducts();
    }
    this.setState({ searchValue: searchV });
    console.log(searchV, this.state.productList);
    let searchF = this.state.productList.filter((f) => {
      console.log(f.value);
      return f.value.toLowerCase().match(searchV.toLowerCase());
    });
    console.log(searchF);
    this.setState({ productList: searchF });
  };

  renderAllProducts = () => {
    return this.state.productList.map((product) => {
      return (
        <Product
          key={product.id}
          id={product.id}
          name={product.value}
          price={product.price}
          image={product.img}
          category={product.category}
          deleteId={this.deleteProductWithId}
          editId={this.editProductWithId}
          stockId={this.getStocks}
        ></Product>
      );
    });
  };

  categoryFilter = (event) => {
    let categoryV = event.target.value;

    if (categoryV !== " ") {
      this.setState({ categoryValue: categoryV });

      let categoryP = this.state.categoryProducts.filter((f) => {
        return f.category.match(categoryV);
      });

      this.setState({ productList: categoryP });
    } else {
      this.getAllProducts();
    }
  };
  render() {
    return (
      <div>
        <Navbar />
        <Form className="style">
          <span>
            <br></br>
            <input
              placeholder="search here..."
              type="text"
              value={this.state.searchValue}
              onChange={this.getSearch}
              style={{ marginLeft: 400 }}
            ></input>
            <label style={{ paddingLeft: "15px" }}>Category Filter: </label>

            <select
              defaultValue={"DEFAULT"}
              id="category"
              name="category :"
              onChange={this.categoryFilter}
            >
              <option value="DEFAULT" disabled>
                Choose a category ...
              </option>
              <option value="" selected="true">
                Select
              </option>

              <option value="electronics">Electronics</option>

              <option value="clothing">Clothing</option>

              <option value="furniture">Furniture</option>
            </select>
            {/* SearchValue: {this.state.searchValue} */}
            <Button
              style={{ height: "40px", marginLeft: 50, marginRight: 100 }}
              onClick={this.openAddProduct}
              variant="outline-primary"
            >
              AddProduct
            </Button>
          </span>
        </Form>
        <br></br>
        <br></br>
        <h2>Product List</h2>
        <div>{this.renderAllProducts()}</div>
      </div>
    );
  }
}

export default Home;
