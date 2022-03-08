import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import { Button } from 'react-bootstrap';
import Details from './Details';

const PortfolioEdit = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <section className="portfolio">

            <h1 className="heading"> <span>my</span> work </h1>

            <div className="box-container">

                <div className="box">
                    <img src="images/img-1.png" alt=""/>
                    <div className="content">
                        <h3>Hublet</h3>
                        <p>Watch Selling MERN Stack Website.User can buy watch from the shop.</p>
                        <ExternalLink href="https://watch-website-2a3c4.web.app/">Live Site</ExternalLink>
                        {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                            Details
                        </Button> */}
                        <Link to={'/details-Hublet'}>Details</Link>
                        {/* <Details
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        /> */}
                        
                    </div>
                </div>

                <div className="box">
                    <img src="images/img-2.png" alt=""/>
                    <div className="content">
                        <h3>Travely</h3>
                        <p>This is a Tourism service platform,customer can login with google,Customer can book service and cancel service</p>
                        <ExternalLink href="https://travely-tourism-agency.web.app/">Live Site</ExternalLink>
                        {/* <a href="#">Details</a> */}
                        <Link to={'/details'}>Details</Link>
                    </div>
                </div>

                <div className="box">
                    <img src="images/img-3.png" alt=""/>
                    <div className="content">
                        <h3>Medinova Ltd</h3>
                        <p>This is a diagnostic centre website where user can create an account  via google. User can login to his/her account</p>
                        <ExternalLink className="btn" href="https://medinova-diagonistic-centre.web.app/">Live Site</ExternalLink>
                        <a href="#">Details</a>
                    </div>
                </div>

            </div>

                    <a href="#" className="btn"> load more <i className="fas fa-redo"></i> </a>

            </section>
        </div>
    );
};

export default PortfolioEdit;




