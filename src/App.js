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

import { Routes, Route } from "react-router-dom";
import ProfilePage from "./Components/UserProfile/Profile";

// import Error from "./Components/Error/Error";
// import Cart from "./Components/Cart/Cart";

function App() {
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
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
