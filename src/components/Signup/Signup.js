import React, { useState } from "react";
import "./Signup.css";
import { NavLink } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage,setErrorMessage] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
      });

      const data = await response.json();
      console.log(data);
      if(data.error) //this variable is defined is backend
      {
        setErrorMessage(data.error);
        return;
      }
    } catch (error) {
     console.log(error)
    }
  };

  // url for forgot password anchor tag
  let popupVisible = () => {
    document.querySelector(".box").classList.add("pop-up");
  };

  let popupRemove = () => {
    const main = document.querySelector(".main"); //removes the main class
    main.remove();
  };
  setTimeout(popupVisible, 500); // automatically pops up after 2000 millisec
  return (
    <>
      <div
        className="main"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          flexDirection: "column",
          backgroundColor: "transparent"
        }}
      >
        <div className="box">
          <div className="box-left">
            <div className="log-in-image">
              {/* <img
                src="https://i.kym-cdn.com/photos/images/original/001/613/005/3c4.png"
                alt=""
              ></img> */}
            </div>
          </div>
          <div className="box-right">
            <span className="close-btn" onClick={popupRemove}>
              &times;
            </span>

            <h2 className="login-heading">Welcome to Collab&#46;mp3</h2>
            <form onSubmit={handleSubmit} >  
              <div className="error-msg" >{errorMessage.map((error,index)=>(<span key={index}>{error.msg} . </span>))}</div>
              <div className="input-details">
                <input
                  type="text"
                  placeholder="Username"
                  autoComplete="new-password"
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                ></input>
                
                
              </div>
              
              <div className="input-details">
                <input
                  type="text"
                  placeholder="Email address"
                  autoComplete="new-password"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                ></input>
              </div>
              <div className="input-details">
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                ></input>
              </div>

              <div className="forgot-password"></div>
              <div className="login">
                <div className="checkbox">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="button">
                  <button className="log-in-link" type="submit">
                    Sign up
                  </button>
                </div>
              </div>
            </form>
            <hr className="horizonal-line" />
            <div className="sign-up-section">
              <h2>Already have an account?</h2>
              <NavLink to="">
                <button className="sign-up-link">Log in to Collab</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
