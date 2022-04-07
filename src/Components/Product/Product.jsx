import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Product.scss";
import { useParams } from "react-router-dom";

import { addToCart } from "../../Redux/cart/action";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";
const Product = () => {
  const [loading__Status, setLoading__Status] = useState(true);
  const [productsData, setProductsData] = useState({
    id: "",
    title: "",
    price: "",
    oldprice: "",
    imageUrl: ["", ""],
    desc: "",
    details: ["", "", "", "", ""],
    fabric: [""],
    material: ["", "", "", " ", ""],
  });
  const cartDetails = useSelector((cart) => cart.addToCartReducer);
  const dis = useDispatch();
  const { id } = useParams();
  const loginStatus = useSelector((status) => status.loginReducer.loginStatus);

  // console.log(loginStatus);

  // console.log(productsData.imageUrl[0]);

  const handleAddToCart = () => {
    loginStatus == false
      ? alert("PLEASE LOG IN FIRST")
      : dis(addToCart(productsData));
  };

  useEffect(() => {
    fetch(`http://localhost:3004/products?id=${id}`)
      .then((res) => res.json())
      .then((res) => setProductsData(res[0]))
      .catch((err) => console.log("SERVER ERROR"));

    return () => {};
  }, []);

  useEffect(() => {
    let setIntervalId = setInterval(() => {
      setLoading__Status(false);
    }, 2000);

    return () => {
      clearInterval(setIntervalId);
    };
  }, []);

  return loading__Status ? (
    <div className="loading__Screen">
      <img
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/loader_compressed-v3.gif"
        alt="loading-gif"
      />
    </div>
  ) : (
    <div>
      <Navbar path="fitness" />

      <div className="product-body">
        <div className="product-body_container">
          <div className="product-body_container-imgBox">
            <img src={productsData.imageUrl[0]} alt="p" />
            <img src={productsData.imageUrl[1]} alt="p" />
          </div>
          <div className="product-body_container-textBox">
            <h2>{productsData.title}</h2>
            <div className="product-body_container-textBox_priceBox">
              <h3>₹{productsData.price}</h3>
              <h2>₹{productsData.oldprice}</h2>
              <off>40% Off</off>
            </div>
            <dec>{productsData.desc}</dec>
            <div className="product-body_container-textBox-btn">
              {" "}
              <button onClick={() => handleAddToCart()}>Add to Cart</button>
              <button>View Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
