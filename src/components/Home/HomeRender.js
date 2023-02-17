import React from "react";
import "./music.jpg";
export default function HomeRender(props) {
  const play = () => {
    let a = document.getElementById(`mystery${props.item.key}`)
    a.style.visibility="visible"
    a.style.boxShadow="0 10px 20px rgba(0,0,0,0.8), 0 4px 8px rgba(255,255,255,1)"
  };
  const play2=()=>{
    let a = document.getElementById(`mystery${props.item.key}`)
    a.style.visibility="hidden"
  }
  return (
    <div
      className="card mx-4 cardmys"
      style={{
        backgroundImage: `url('${props.item.photo}')`,
        width: "20rem",
        height: "15rem",
        backgroundSize: "25rem 15rem",
        backgroundRepeat: "no-repeat",
        borderRadius: "5%",
        position:"relative"}}
    >
      <div className="card-body inside" onMouseOver={play} onMouseOut={play2}>
        <h5 className="card-title" style={{color:"white"}}>{props.item.title}</h5>
        <button id={`mystery${props.item.key}`} style={{borderColor:"rgb(255,84,5)",borderRadius:"50%",position:"absolute",bottom:"40px",right:"20px",visibility:"hidden", backgroundColor:"rgb(255,84,5)"}}><svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="50"
          fill="black"
          className="bi bi-play-fill mx-2 my-2"
          viewBox="0 0 16 16"
        >
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
        </svg>
        </button>
      </div>
    </div>
  );
}
