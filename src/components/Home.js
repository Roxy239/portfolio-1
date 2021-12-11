function Home() {
  return (
    <section className="home">

        <div className="image">
            <img src="./images/user-1.png" alt=""/>
        </div>

        <div className="content">
            <h3>hi, i am sana shaikh</h3>
            <span>front-end developer</span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet porro facere expedita ab atque a consectetur odit vel soluta itaque.</p>
            <a href="latest resume.pdf" download="latest resume.pdf" className="btn"> Download Resume <i className="fas fa-user"></i> </a>
        </div>

    </section>
  );
}

export default Home;
