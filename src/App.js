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
} from "./Components";

import { Routes, Route } from "react-router-dom";

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
