import React from "react";
import "./Searchpage.css";
function Searchpage() {
  const data = [
    {
      key: 1,
      image:
        "https://news.harvard.edu/wp-content/uploads/2018/01/musicstudy-1200x800.jpg",
      name: "Sample Name"
    },
    {
      key: 2,
      image:
        "https://news.harvard.edu/wp-content/uploads/2018/01/musicstudy-1200x800.jpg",
      name: "Sample Name"
    }
  ];

 
  return (
    <>
      <link href="https://css.gg/search.css" rel="stylesheet" />
      <div className="main">
        <div className="search-page">
          <nav className="header">
            <div className="logo-image">COLLAB.MP3</div>
            <div className="search-input">
              <input
                type="text"
                placeholder="Search songs, artists & podcasts you love!"
              ></input>
              <i className="gg-search search-logo"></i>
            </div>
          </nav>
        </div>
        <div className="trending-searches">
          <div className="trending-header">
            <h2>Trending Searches</h2>
          </div>
          <div className="trending-cards">
            <div className="card">
              <img
                src="https://news.harvard.edu/wp-content/uploads/2018/01/musicstudy-1200x800.jpg"
                alt=""
              />
              <h3>Sample Name</h3>
            </div>
            <div className="card">
              <img
                src="https://news.harvard.edu/wp-content/uploads/2018/01/musicstudy-1200x800.jpg"
                alt=""
              />
              <h3>Sample Name</h3>
            </div>
            <div className="card">
              <img
                src="https://news.harvard.edu/wp-content/uploads/2018/01/musicstudy-1200x800.jpg"
                alt=""
              />
              <h3>Sample Name</h3>
            </div>
            <div className="card">
              <img
                src="https://news.harvard.edu/wp-content/uploads/2018/01/musicstudy-1200x800.jpg"
                alt=""
              />
              <h3>Sample Name</h3>
            </div>
            <div className="card">
              <img
                src="https://news.harvard.edu/wp-content/uploads/2018/01/musicstudy-1200x800.jpg"
                alt=""
              />
              <h3>Sample Name</h3>
            </div>
            <div className="card">
              <img
                src="https://news.harvard.edu/wp-content/uploads/2018/01/musicstudy-1200x800.jpg"
                alt=""
              />
              <h3>Sample Name</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchpage;
