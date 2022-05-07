import "./App.scss";
import {
  Navbar,
  Home,
  Care,
  Store,
  Mind,
  Fitness,
  Footer,
  Login,
  Cart,
  Product,
  Checkout,
  Error,
} from "./Components";
import Admin from "./Components/Admin/CreateProduct";

import { Routes, Route } from "react-router-dom";
import ProfilePage from "./Components/UserProfile/Profile";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./Redux/loginDetails/action";

// import Error from "./Components/Error/Error";
// import Cart from "./Components/Cart/Cart";

function App() {
  const loginRedux = useSelector((store) => store.loginReducer);
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:9999/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("RESPONSE :", response);
        console.log("User : ", response.user);
        response.status === 200 && dispatch(login(response.user));
        response.status === 200 &&
          localStorage.setItem("token", JSON.stringify(response.token));

        setUser(response.user);
      })
      .catch((err) => {
        console.log("err" + err);
      });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/care" element={<Care />} />
        <Route path="/mind" element={<Mind />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
