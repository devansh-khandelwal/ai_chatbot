import React, { useState } from "react";
import "./login.css";
import Vector from "./../../images/Vector.svg";
import logo from "./../../images/logo_g.png";
import { useNavigate } from "react-router-dom";
import axios from "./../../utils/Axios";

function Login({ setToken }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("/api/login", {
          email,
          password,
        })
        .then(function (response) {
          console.log(response);
          localStorage.setItem("token", JSON.stringify(response.data));
          setToken(JSON.stringify(response.data));
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 400) {
            alert("Invalid Credentials");
          } else {
            alert("Internal Server Error");
          }
        });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="home">
      <div className="background_img">
        <div className="navbar">
          <img className="img" src={Vector} alt="vector" />
        </div>
        <div className="container">
          <div className="welcome">
            <img className="logo_img" src={logo} alt="logo" />
            <div className="init_msg">Welcome to </div>
            <div className="init_msg">goodspace communication </div>
          </div>
          <div className="login_container">
            <div className="signup">Signup/Login</div>
            <form onSubmit={handleClick}>
              <label>Your Email Id</label>
              <input
                type="text"
                autoFocus
                id="email"
                autoComplete="on"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="pass">Password</label>
              <input
                type="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="loginBtn" type="submit">
                Let's Go!!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
