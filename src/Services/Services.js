import React from "react";
import "./Services.css"
import video4 from "../../images/vid-5.mp4"


export const Services=()=>{
    return(
        <div>
            Services
            <video src={video4} autoPlay loop muted={true} type="video/mp4" />
        </div>
    )
}