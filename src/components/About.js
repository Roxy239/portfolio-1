function About() {
  return (
    <>
        <section className="about">

            <h2 className="heading"> about me </h2>

            <div className="row">

                <div className="info-container">

                    <h1>personal info</h1>

                    <div className="box-container">

                        <div className="box">
                            <h1>Web development</h1>
                            <p>I have studied computer science and at the faculty of Computer Science & Enginnering at East West University, which provided a range of computer-based systems and technical skills</p>
                            {/* <h3> <span>name : </span> Rahat Ara Hossain</h3>
                            <h3> <span>age : </span> 24 </h3>
                            <h3> <span>email : </span> rahatara239@gmail.com </h3>
                            <h3> <span>address : </span> Dhaka, Bangladesh </h3> */}
                        </div>

                        <div className="box">
                            <p>I feel myself to be proficient in most aspects of web development, but I am aware that I still have a lot to learn. I am easily trainable and can pick up new skills quickly. If I don't have prior knowledge with a piece of software or a talent, I conduct extensive research to learn about it.</p>
                            {/* <h3> <span>freelance : </span> available </h3> */}
                            {/* <h3> <span>skill : </span> front-end </h3>
                            <h3> <span>experience : </span> 6 months </h3>
                            <h3> <span>language : </span> Bangla, English </h3> */}
                        </div>

                    </div>

                    <a href="latest resume.pdf" download="latest resume.pdf" className="btn"> Download CV <i className="fas fa-download"></i> </a>

                </div>

                {/* <div className="count-container">

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

                </div> */}

            </div>

        </section>


        <section className="skills">

            <h1 className="heading"> <span>my</span> skills </h1>

            <div className="box-container">
                <div className="box">
                    <img src="images/icon-1.png" alt=""/>
                    <h3>html</h3>
                </div>
                <div className="box">
                    <img src="images/icon-2.png" alt=""/>
                    <h3>css</h3>
                </div>
                <div className="box">
                    <img src="images/icon-3.png" alt=""/>
                    <h3>javascript</h3>
                </div>
                
                <div className="box">
                    <img src="images/icon-6.png" alt=""/>
                    <h3>react.js</h3>
                </div>
                <div className="box">
                    <img src="images/node.png"/>
                    <h3>node</h3>
                </div>
            </div>

        </section>



        <section className="education">

            <h1 className="heading"> Resume </h1>

            <div className="box-container">

                <div className="box">
                    <i className="fas fa-graduation-cap"></i>
                    <span>2016 - 2020</span>
                    <h3>BSc. in Computer Science and Engineering</h3>
                    <p>East West University</p>
                </div>

                <div className="box">
                    <i className="fas fa-graduation-cap"></i>
                    <span>2021</span>
                    <h3>COMPLETE WEB DEVELOPMENT COURSE WITH JHANKAR MAHBUB</h3>
                    <p>Programming Hero</p>
                </div>

                

            </div>

        </section>
      
    </>
  );
}

export default About;