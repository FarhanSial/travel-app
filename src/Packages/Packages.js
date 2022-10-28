import React from "react";
import "./Packages.css";
import book1img from "../../images/g-2.jpg"
import video2 from "../../images/vid-2.mp4"



export const Packages=()=>{
    
    return(
        <div>packages
            <sectio classname="packages" id="packages">
            {/* <img src={book1img} alt=""  /> */}
            <h1 className="heading">
            <span>P</span>
            <span>a</span>
            <span>c</span>
            <span>k</span>
            <span>a</span>
            <span>g</span>
            <span>e</span>
            <span>s</span>
        </h1>
        <video autoPlay loop muted={true} src={video2} type="video/mp4" />

            </sectio>
        </div>
    )
    
}