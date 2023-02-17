import React, { useState } from "react";
import HomeRender from "./HomeRender";
import photo1 from "./music.jpg"
import photo2 from "./pikrepo.jpg"
import photo3 from "./pikrepo(1).jpg"
import photo4 from "./pikrepo(2).jpg"
import photo5 from "./pikrepo(4).jpg"
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

export default function Home() {
  const [data, setData] = useState([
    {
      photo: photo1,
      title: "Zeena",
      key: 1,
    },
    {
      photo: photo2,
      title: "Marna",
      key: 2,
    },
    {
      photo: photo3,
      title: "Wow",
      key: 3,
    },
    {
      photo: photo4,
      title: "How",
      key: 4,
    },
    {
      photo: photo5,
      title: "Yes",
      key: 5,
    },
  ]);
  const music = (item) => {
    return <HomeRender key={item.key} item={item} />;
  };
  return (
    <div>
    <div>
    <Login/>
    </div>
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 g-4" style={{zIndex:"1"}}>{data.map(music)}</div>
    </div>
    </div>
  );
}
