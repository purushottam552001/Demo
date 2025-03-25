import React from "react";
import "./Header.css";
import img1 from "./icon dot.png";
import img2 from "./icon plus.png";
import img3 from "./icon login.png";
import img4 from "./reallogo.png";
import img5 from "./homeimage.jpg";
import { Carousel } from "antd";
import img6 from "./imagehouse21.jpg";
import img7 from "./imagehouse22.jpg";
import img8 from "./imagehouse23.jpg";
import imgddu from "./ddu nagar.webp";
import imgbht from "./bhatagaon.webp";
import imggud from "./gudhyari.webp";
import imgamli from "./amlidih.webp";
import imgmor from "./mor raipuir.webp";
import imgmowa from "./mowa sadu.webp";
import imgnewr from "./naya raipur.webp";
import imgshn from "./shankar nagar.webp";
import imgtatibndh from "./tatibandh.webp";
import Crousel from "./Crousel";

function Header() {
  return (
    <div className="headermain">
      <div className="header-list">
        <img className="img4" src={img4}></img>
        <ul className="list1">
          <li>Home</li>
          <li>Property Sub type</li>
          <li>Projects</li>
          <li>Explore</li>
          <li>Blog</li>
          <li>Construction</li>
          <li>Interior</li>

          <div className="imageview">
            <img className="imgpng3" src={img3}></img>
            <img className="imgpng1" src={img2}></img>
            <img className="imgpng2" src={img1}></img>
          </div>
        </ul>
      </div>

      <div className="mainbg">
        <Carousel autoplay>
          <img className="image5" src={img5}></img>
          <img className="image5" src={img6}></img>
          <img className="image5" src={img7}></img>
          <img className="image5" src={img8}></img>
        </Carousel>

        <div className="mainsearch">
          <div className="searchlist">
            <ul className="searchbar">
              <li>Buy</li>
              <li>Rent</li>
              <li>Sell</li>
            </ul>
          </div>
          <div>
            <input
              type="text"
              name=" searchtype "
              placeholder="search"
              className="inputbox"
            ></input>
          </div>
        </div>
        <div className="trendingview">
          <h1>
            <b> Trending Area in Raipur </b>
          </h1>
          <br></br>

          <div className="divarea">
            
                  
            <div>
              <img className="imagep1" src={imgddu}></img>
              <p>
                <b>DDU NAGAR</b>
              </p>
            </div>
            <div>
              <img className="imagep1" src={imgbht}></img>
              <p>
                <b>bHATAGAON</b>
              </p>
            </div>
            <div>
              <img className="imagep1" src={imgnewr}></img>
              <p>
                <b>NAYA RAIPUR</b>
              </p>
            </div>
            <div>
              <img className="imagep1" src={imggud}></img>
              <p>
                <b>GUDHYARI</b>
              </p>
            </div>
            <div>
              <img className="imagep1" src={imgamli}></img>
              <p>
                <b>AMLIDIH</b>
              </p>
            </div>
            <div>
              <img className="imagep1" src={imgmor}></img>
              <p>
                <b>MOR RAIPUR</b>
              </p>
            </div>
            <div>
              <img className="imagep1" src={imgmowa}></img>
              <p>
                <b>SADU MOWA</b>
              </p>
            </div>
            <div>
              <img className="imagep1" src={imgshn}></img>
              <p>
                <b>SHANKAR NAGAR</b>
              </p>
            </div>
            <div>
              <img className="imagep1" src={imgtatibndh}></img>
              <p>
                <b>TATIBANDH</b>
              </p>
            </div>
            
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="saleview">
          <h1>
            <b>Featured Property Sale</b>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
