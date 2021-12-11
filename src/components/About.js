function About() {
  return (
    <>
        <section className="about">

            <h1 className="heading"> about <span>me</span> </h1>

            <div className="row">

                <div className="info-container">

                    <h1>personal info</h1>

                    <div className="box-container">

                        <div className="box">
                            <h3> <span>name : </span> sana shaikh </h3>
                            <h3> <span>age : </span> 22 </h3>
                            <h3> <span>email : </span> sanashaikh@gmail.com </h3>
                            <h3> <span>address : </span> mumbai, india - 400104 </h3>
                        </div>

                        <div className="box">
                            <h3> <span>freelance : </span> available </h3>
                            <h3> <span>skill : </span> front-end </h3>
                            <h3> <span>experience : </span> 2 years </h3>
                            <h3> <span>language : </span> hindi, english </h3>
                        </div>

                    </div>

                    <a href="#" className="btn"> download CV <i className="fas fa-download"></i> </a>

                </div>

                <div className="count-container">

                    <div className="box">
                        <h3>2+</h3>
                        <p>years of experience</p>
                    </div>

                    <div className="box">
                        <h3>450+</h3>
                        <p>happy clients</p>
                    </div>

                    <div className="box">
                        <h3>390+</h3>
                        <p>project completed</p>
                    </div>

                    <div className="box">
                        <h3>10+</h3>
                        <p>awards won</p>
                    </div>

                </div>

            </div>

        </section>


        <section className="skills">

            <h1 className="heading"> <span>my</span> skills </h1>

            <div className="box-container">
                <div className="box">
                    <img src="images/icon-1.png"/>
                    <h3>html</h3>
                </div>
                <div className="box">
                    <img src="images/icon-2.png"/>
                    <h3>css</h3>
                </div>
                <div className="box">
                    <img src="images/icon-3.png"/>
                    <h3>javascript</h3>
                </div>
                <div className="box">
                    <img src="images/icon-6.png"/>
                    <h3>react.js</h3>
                </div>
                <div className="box">
                    <img src="images/node.png"/>
                    <h3>node</h3>
                </div>
            </div>

        </section>



        <section className="education">

            <h1 className="heading"> <span>my</span> education </h1>

            <div className="box-container">

                <div className="box">
                    <i className="fas fa-graduation-cap"></i>
                    <span>2015 - 2016</span>
                    <h3>front-end development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
                </div>

                <div className="box">
                    <i className="fas fa-graduation-cap"></i>
                    <span>2016 - 2017</span>
                    <h3>front-end development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
                </div>

                <div className="box">
                    <i className="fas fa-graduation-cap"></i>
                    <span>2017 - 2018</span>
                    <h3>front-end development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
                </div>

            </div>

        </section>
      
    </>
  );
}

export default About;