import React from "react";
import "./banner.css";
import video1 from "../../videos/vid1.mp4"



export const Banner = () => {
    return (
        <div>
            {/* <!-- home section starts --> */}
            <section className="home" id="home">

                <div className="content">
                    <h3>adventure is worthwile</h3>
                    <p>discover new piease with us,adventure awaits</p>
                    <a href="#" className="btn">discover more</a>
                </div>
                <video autoPlay loop muted={true} src={video1} type="video/mp4" />
            </section>
            {/* <!-- home section end --> */}


        </div>
    )

}

