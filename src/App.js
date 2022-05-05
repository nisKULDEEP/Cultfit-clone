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

// import Error from "./Components/Error/Error";
// import Cart from "./Components/Cart/Cart";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:3030/auth/login/success`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
      },
    })
      .then(
        (res) => res.json()
        // throw new Error("Authentification failed");
      )
      .then((res) => {
        console.log(res);
        setUser(res.user);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(user);
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

