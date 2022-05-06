import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Admin.css";

const Admin = () => {
  const [loading__Status, setLoading__Status] = useState(true);

  useEffect(() => {
    let setIntervalId = setInterval(() => {
      setLoading__Status(false);
    }, 1000);

    return () => {
      clearInterval(setIntervalId);
    };
  }, []);

  const [data, setData] = useState({
    title: "",
    price: "",
    oldPrice: "",
    imageUrl: "",
    description: "",
    Colour: "",
    material: "",
    "Heavy equipment training": false,
    "All workouts": false,
    details: "",
  });

  const handleChange = (e) => {
    let { value, checked, name, type } = e.target;

    setData((oldData) => {
      return {
        ...oldData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    fetch(`https://cultfit-server.herokuapp.com/products/upload`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
        token: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return loading__Status ? (
    <div className="loading__Screen">
      {" "}
      <img
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/loader_compressed-v3.gif"
        alt="loading-gif"
      />
    </div>
  ) : (
    <div className="main-div">
      <Navbar />
      <form className="main-form">
        <h2>PRODUCT UPLOAD</h2>
        <div className="first-div">
          <div>
            <input
              type="text"
              name="title"
              placeholder="Enter Title"
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <input
              type="number"
              name="price"
              placeholder="Enter Price"
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <input
              type="number"
              name="oldPrice"
              placeholder="Enter Old Price"
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              name="imageUrl"
              placeholder="Enter Image Link"
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              name="description"
              placeholder="Enter Description"
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="material">
          <div>
            <label> Choose Colour: </label>
            <input
              type="color"
              name="Colour"
              placeholder="Colour"
              className="color"
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            Material :
            <input
              type="text"
              name="material"
              placeholder="Enter Material"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="suitable">
            <label>
              Suitable for:
              <br />
              <div className="suitable-component">
                <input
                  type="checkbox"
                  name="Suitable for"
                  value="Heavy equipment training"
                  onChange={handleChange}
                />
                <label>Heavy equipment training</label>
                <br />
                <input
                  type="checkbox"
                  name="All workouts"
                  value="All workouts"
                  onChange={handleChange}
                />
                <label style={{ marginLeft: "-70px" }}>All workouts</label>
              </div>
            </label>
          </div>
        </div>
        <br />
        Extra Details
        <div>
          <label>
            <textarea
              type="text"
              placeholder="enter size"
              name="details"
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <div>
          <input
            type="submit"
            name="submit"
            value="Submit"
            className="submit-button"
            onClick={handleAdd}
          />
        </div>
      </form>
    </div>
  );
};

export default Admin;
