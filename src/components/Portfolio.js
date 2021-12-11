import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <section className="portfolio">

<h1 className="heading"> <span>my</span> work </h1>

<div className="box-container">

    <div className="box">
        <img src="images/img-1.png" alt=""/>
        <div className="content">
            <h3>project 01</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
            <a href="#">read more</a>
        </div>
    </div>

    <div className="box">
        <img src="images/img-2.png" alt=""/>
        <div className="content">
            <h3>project 02</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
            <a href="#">read more</a>
        </div>
    </div>

    <div className="box">
        <img src="images/img-3.png" alt=""/>
        <div className="content">
            <h3>project 03</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
            <a href="#">read more</a>
        </div>
    </div>

    

  

</div>

        <a href="#" className="btn"> load more <i className="fas fa-redo"></i> </a>

</section>
        </div>
    );
};

export default Portfolio;




