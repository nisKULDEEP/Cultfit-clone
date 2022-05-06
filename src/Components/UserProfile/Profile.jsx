import React, { useEffect, useState } from "react";
import "./Profile.css";
import { BsCart3 } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdRedeem } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { login } from "../../Redux/loginDetails/action";
import { useNavigate } from "react-router-dom";

export const ProfilePage = () => {
  const [loading__Status, setLoading__Status] = useState(true);

  useEffect(() => {
    let setIntervalId = setInterval(() => {
      setLoading__Status(false);
    }, 1000);

    return () => {
      clearInterval(setIntervalId);
    };
  }, []);

  //   const loginStatus = useSelector((store) => store.loginReducer.loginStatus);
  const loginRedux = useSelector((store) => store.loginReducer.loginDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    name: loginRedux.first_name + " " + loginRedux.last_name,
    gender: loginRedux.gender,
    email: loginRedux.email,
    work_email: "",
    mobile: loginRedux.mobile,
    date_of_birth: "",
    photo: loginRedux.photo,
  });

  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const [first_name, last_name] = formData.name.split(" ");
    const newPayload = {
      ...formData,
      first_name,
      last_name,
    };

    delete newPayload.name;
    delete newPayload.work_email;
    delete newPayload.date_of_birth;
    fetch(`https://cultfit-server.herokuapp.com/users/${loginRedux._id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
        token: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      method: "PUT",
      body: JSON.stringify(newPayload),
    })
      .then((res) => res.json())
      .then((data) => {
        const pay = {
          ...newPayload,
          _id: loginRedux._id,
        };
        dispatch(login(pay));
      })
      .catch((err) => console.log(err));
  }

  const handleLogout = () => {
    fetch("http://localhost:9999/logout", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
      },
      method: "GET",
    }).catch(console.log("Google SignOut Error"));

    fetch("https://cultfit-backend.herokuapp.com/users/signout", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
        token: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.clear("token");
        navigate("/");
        window.location.reload(false);
      });
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
    <>
      <Navbar />
      {/* main div */}
      <div className="profileMaindiv" style={{ display: "flex" }}>
        {/* left */}
        <div
          className="profileLeftbar"
          style={{ width: "25%", height: "100vh" }}
        >
          <div className="profile-row" style={{ height: "25%" }}>
            <div
              className="profile-row-left"
              style={{ marginTop: "5%", display: "flex" }}
            >
              {/* left row image */}
              <div
                className="profile-row-left-img"
                style={{ marginLeft: "10%", marginTop: "5%" }}
              >
                <div
                  style={{ width: "75px", height: "80px", borderRadius: "50%" }}
                >
                  <img
                    src={loginRedux.photo}
                    alt="profileimage"
                    style={{
                      width: "75px",
                      height: "80px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </div>
              <div style={{ marginLeft: "10%", marginTop: "5%" }}>
                <label>
                  {loginRedux.first_name + " " + loginRedux.last_name}
                </label>
                <h6
                  style={{
                    color: "red",
                    fontSize: "12px",
                    fontWeight: "unset",
                  }}
                >
                  VIEW PROFILE
                </h6>
              </div>
            </div>
          </div>
          <div className="left-bar-col">
            <div
              className="left-bar-col-1"
              style={{ marginLeft: "5%", marginTop: "7.5%", display: "flex" }}
            >
              <div style={{ width: "350px", cursor: "pointer" }}>Orders</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  paddingRight: "7.5%",
                  cursor: "pointer",
                }}
              >
                <BsCart3 />
              </div>
            </div>
            <div
              className="left-bar-col-2"
              style={{ marginLeft: "5%", marginTop: "7.5%", display: "flex" }}
            >
              <div style={{ width: "350px", cursor: "pointer" }}>
                Medical Records
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  paddingRight: "7.5%",
                  cursor: "pointer",
                }}
              >
                <FaHeartbeat />
              </div>
            </div>
            <div
              className="left-bar-col-3"
              style={{ marginLeft: "5%", marginTop: "7.5%", display: "flex" }}
            >
              <div style={{ width: "350px", cursor: "pointer" }}>
                Active Packs and Subscription
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  paddingRight: "7.5%",
                  cursor: "pointer",
                }}
              >
                <MdOutlineSubscriptions />
              </div>
            </div>
            <div
              className="left-bar-col-4"
              style={{ marginLeft: "5%", marginTop: "7.5%", display: "flex" }}
            >
              <div style={{ width: "350px", cursor: "pointer" }}>
                Redeem Vocher
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  paddingRight: "7.5%",
                  cursor: "pointer",
                }}
              >
                <MdRedeem />
              </div>
            </div>
            <div
              className="left-bar-col-5"
              style={{ marginLeft: "5%", marginTop: "7.5%", display: "flex" }}
            >
              <div style={{ width: "350px", cursor: "pointer" }}>Account</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  paddingRight: "7.5%",
                  cursor: "pointer",
                }}
              >
                <FiSettings />
              </div>
            </div>
            <div
              className="left-bar-col-6"
              style={{ marginLeft: "5%", marginTop: "7.5%", display: "flex" }}
            >
              <div style={{ width: "350px", cursor: "pointer" }}>Support</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  paddingRight: "7.5%",
                  cursor: "pointer",
                }}
              >
                <MdOutlineSupportAgent />
              </div>
            </div>
            <div
              className="left-bar-col-7"
              style={{ marginLeft: "5%", marginTop: "7.5%", display: "flex" }}
              onClick={handleLogout}
            >
              <div style={{ width: "350px", cursor: "pointer" }}>Logout</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  paddingRight: "7.5%",
                  cursor: "pointer",
                }}
              >
                <FiLogOut />
              </div>
            </div>

            {loginRedux.role === "ADMIN" && (
              <div
                className="left-bar-col-8"
                style={{ marginLeft: "5%", marginTop: "7.5%", display: "flex" }}
                onClick={() => {
                  navigate("/admin");
                }}
              >
                <div style={{ width: "350px", cursor: "pointer" }}>
                  ADMIN PANEL
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    paddingRight: "7.5%",
                    cursor: "pointer",
                  }}
                >
                  <GrUserAdmin />
                </div>
              </div>
            )}
          </div>
        </div>
        {/* right */}

        <div
          className="profileRightbar"
          style={{ width: "70%", height: "678px" }}
        >
          {/* imagediv */}
          <form>
            <div
              className="profileimg"
              style={{
                width: "150px",
                height: "150px",
                marginLeft: "33%",
                marginTop: "7%",
              }}
            >
              <div>
                <img
                  src={loginRedux.photo}
                  alt="profileimage"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                />
                {/* <input type="file" name="profile_pic" style={{width:"350px",border:"none",outline:"none"}}/>  */}
              </div>
            </div>
          </form>
          <h3 style={{ marginLeft: "5%", marginTop: "5%" }}>PROFILE</h3>
          <div className="Profile-description" style={{ margin: "50px" }}>
            <form onSubmit={handleSubmit}>
              <div className="Col-1" style={{ width: "50%", height: "300px" }}>
                {/* profile description */}
                {/* name */}
                <div className="input-feild-container">
                  <label
                    style={{
                      fontSize: "12px",
                      fontFamily:
                        "BrandonTextWeb-Regular, HelveticaNeue,Helvetica,Roboto,Arial,sans-serif !important",
                    }}
                  >
                    NAME
                  </label>
                  <div input-container>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      onChange={handleChange}
                      value={formData.name}
                      style={{
                        width: "350px",
                        border: "none",
                        outline: "none",
                        borderBottom: "1px solid grey",
                      }}
                    />
                  </div>
                </div>
                {/* gender */}
                <div className="input-feild-container">
                  <label
                    style={{
                      Font: "12px",
                      fontSize: "12px",
                      fontFamily:
                        "BrandonTextWeb-Regular, HelveticaNeue,Helvetica,Roboto,Arial,sans-serif !important",
                    }}
                  >
                    GENDER
                  </label>
                  <div input-container>
                    <input
                      type="text"
                      name="gender"
                      onChange={handleChange}
                      value={formData.gender}
                      style={{
                        width: "350px",
                        border: "none",
                        outline: "none",
                        borderBottom: "1px solid grey",
                      }}
                    />
                  </div>
                </div>
                {/* email */}
                <div className="input-feild-container">
                  <label
                    style={{
                      fontSize: "12px",
                      fontFamily:
                        "BrandonTextWeb-Regular, HelveticaNeue,Helvetica,Roboto,Arial,sans-serif !important",
                    }}
                  >
                    EMAIL
                  </label>
                  <div input-container>
                    <input
                      type="text"
                      name="email"
                      placeholder="All primary Email"
                      onChange={handleChange}
                      value={formData.email}
                      style={{
                        width: "350px",
                        border: "none",
                        outline: "none",
                        borderBottom: "1px solid grey",
                      }}
                    />
                  </div>
                </div>
              </div>
              <button
                style={{
                  backgroundColor: "rgb(237,240,244)",
                  borderRadius: "24px",
                  marginRight: "5%",
                  border: "none",
                }}
              >
                DISCARD
              </button>
              <button
                style={{
                  backgroundColor: "#fe3267",
                  borderRadius: "24px",
                  width: "92px",
                  border: "none",
                  color: "white",
                }}
              >
                SUBMIT
              </button>
            </form>
            <form>
              <div className="Col-2">
                {/* phone number */}
                <div className="input-feild-container">
                  <label
                    style={{
                      fontSize: "12px",
                      fontFamily:
                        "BrandonTextWeb-Regular, HelveticaNeue,Helvetica,Roboto,Arial,sans-serif !important",
                    }}
                  >
                    PHONE NUMBER
                  </label>
                  <div input-container>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Add phone number"
                      onChange={handleChange}
                      value={formData.mobile}
                      style={{
                        width: "350px",
                        border: "none",
                        outline: "none",
                        borderBottom: "1px solid grey",
                      }}
                    />
                  </div>
                </div>
                {/* Date of birth */}
                <div className="input-feild-container">
                  <label
                    style={{
                      fontSize: "12px",
                      fontFamily:
                        "BrandonTextWeb-Regular, HelveticaNeue,Helvetica,Roboto,Arial,sans-serif !important",
                    }}
                  >
                    Date Of Birth
                  </label>
                  <div input-container>
                    <input
                      type="text"
                      name="date_of_birth"
                      placeholder="MM/DD/YYYY"
                      onChange={handleChange}
                      value={formData.date_of_birth}
                      style={{
                        width: "350px",
                        border: "none",
                        outline: "none",
                        borderBottom: "1px solid grey",
                      }}
                    />
                  </div>
                </div>
                {/*Work email */}
                <div className="input-feild-container">
                  <label
                    style={{
                      fontSize: "12px",
                      fontFamily:
                        "BrandonTextWeb-Regular, HelveticaNeue,Helvetica,Roboto,Arial,sans-serif !important",
                    }}
                  >
                    PROFILE PIC URL
                  </label>
                  <div input-container>
                    <input
                      type="text"
                      name="photo"
                      placeholder="Paste Image URL"
                      onChange={handleChange}
                      value={formData.photo}
                      style={{
                        width: "350px",
                        border: "none",
                        outline: "none",
                        borderBottom: "1px solid grey",
                      }}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
