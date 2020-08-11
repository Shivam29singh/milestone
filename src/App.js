import React from "react";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Home from "./Container/Home/Home";
import EditProduct from "./components/Products/EditProduct/EditProduct";
import { BrowserRouter, Route } from "react-router-dom";
import AddProduct from "./components/Products/AddProduct/addproduct";
// import MyProfile from "./components/MyProfile/Product";
import Dashboard from "./Container/dashboard/dashboard";
// import EditProduct from "./components/editProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/register" component={Signup} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Home" component={Home} />
        {/* <Route exact path="/Myprofile" component={MyProfile} /> */}
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/AddProduct" component={AddProduct} />

        <Route
          exact
          path="/editproduct"
          render={(props) => <EditProduct {...props} />}
        />

        <Route exact path="/" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
