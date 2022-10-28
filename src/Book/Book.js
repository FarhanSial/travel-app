import React from "react";
import  "./Book.css"
import book1img from "../../images/book-img.svg"


export const Book =()=>{
    return(
        <div>
            {/* <!-- book section starts --> */}
    <section className="book" id="book">
        <h1 className="heading">
            <span>b</span>
            <span>o</span>
            <span>o</span>
            <span>k</span>
            <span class="space"></span>
            <span>n</span>
            <span>o</span>
            <span>w</span>
        </h1>

        <div className="row">
        {/* <video autoPlay loop muted={true} src={video1} type="video/mp4" /> */}
        <div className="image">
             <img src={book1img} alt="" />
             </div>

             <form action="">
              <div className="inputBox">
                  <h3>where to</h3>
                  <input type="text" placeholder="please name" />
              </div>

              <div className="inputBox">
                  <h3>how many</h3>
                  <input type="number" placeholder="number of guests " />
              </div>
              <div className="inputBox">
                  <h3>arivals</h3>
                  <input type="date" />
              </div>

              <div className="inputBox">
                  <h3>living</h3>
                  <input type="date" />
              </div>
              <input type="submit" className="btn" value="book now"/>
             </form>
        </div>
    </section>

    {/* <!-- book section end --> */}

        </div>
    )
}