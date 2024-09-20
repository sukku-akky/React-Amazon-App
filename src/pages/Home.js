import React from "react";
import "./Home.css"

const Home=()=>{
    return (
        <div className="container">
            <div style={{textAlign:"center",backgroundColor:"grey",fontSize:"90px"}}>
            <h1 >Generic Music</h1>
            <button className="latest-album">Get Our Latest Album</button>
            <button className="play-btn"> &#9658; </button>
            </div>
            
            <h2>Tours</h2>
            <div>
                <div className="tour-item">
                    <span className="tour-date">JUL16</span>
                    <span className="tour-place">DETROIT, MI</span>
                    <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE </span>
                    <button className="buy-btn">BUY TICKETS</button>
                </div>
                <div className="tour-item">
                    <span className="tour-date">JUL16</span>
                    <span className="tour-place">DETROIT, MI</span>
                    <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE </span>
                    <button className="buy-btn">BUY TICKETS</button>
                </div>
                <div className="tour-item">
                    <span className="tour-date">JUL16</span>
                    <span className="tour-place">DETROIT, MI</span>
                    <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE </span>
                    <button className="buy-btn">BUY TICKETS</button>
                </div>
                <div className="tour-item">
                    <span className="tour-date">JUL16</span>
                    <span className="tour-place">DETROIT, MI</span>
                    <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE </span>
                    <button className="buy-btn">BUY TICKETS</button>
                </div>
                <div className="tour-item">
                    <span className="tour-date">JUL16</span>
                    <span className="tour-place">DETROIT, MI</span>
                    <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE </span>
                    <button className="buy-btn">BUY TICKETS</button>
                </div>
                <div className="tour-item">
                    <span className="tour-date">JUL16</span>
                    <span className="tour-place">DETROIT, MI</span>
                    <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE </span>
                    <button className="buy-btn">BUY TICKETS</button>
                </div>
                <div className="tour-item">
                    <span className="tour-date">JUL16</span>
                    <span className="tour-place">DETROIT, MI</span>
                    <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE </span>
                    <button className="buy-btn">BUY TICKETS</button>
                </div>

            </div>
        </div>
    )

}

export default Home;