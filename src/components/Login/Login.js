//log in
import "./Login.css";
import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";


export default function Login() {
  let url = ""; // url for forgot password anchor tag
  let popupVisible = () => {
    document.querySelector(".box").classList.add("pop-up");
  };

  let popupRemove = () => {
    const main = document.querySelector(".main"); //removes the main class
    main.remove();
  };
  setTimeout(popupVisible, 1000); // automatically pops up after 1000 millisec

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage,setErrorMessage] = useState([]);

  const handleSubmit=async(event)=>{
    event.preventDefault();
    try
    {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data=await response.json();
      console.log(data);
      if(data.error)
      {
        setErrorMessage(data.error);
        return;
      }
    }
    catch(error)
    {
      console.log(error)
    }
  }

  return (
    <>
      <div
        className="main"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          flexDirection: "column"
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
                placeholder="Email address or username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              ></input>
            </div>
            <div className="input-details">
              <input type="password" placeholder="Password"   onChange={(event) => {
                    setPassword(event.target.value);
                  }}></input>
            </div>
            <div className="forgot-password">
              <a href={url} className="link-danger">
                Forgot your password?
              </a>
            </div>
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
                <button className="log-in-link">Log In</button>
              </div>
            </div>
            </form>
            <hr className="horizonal-line" />
            <div className="sign-up-section">
              <h2>Don't have an account?</h2>
              <NavLink to="/signup">
                <button className="sign-up-link">Sign up to Collab</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
