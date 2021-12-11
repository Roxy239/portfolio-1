function Contact() {
    return (
        <section className="contact">

            <h1 className="heading"> contact <span>me</span> </h1>

            <div className="row">


                <form action="">

                    <div className="inputBox">
                        <input type="text" placeholder="your name"/>
                        <input type="number" placeholder="your number"/>
                    </div>

                    <div className="inputBox">
                        <input type="email" placeholder="your email"/>
                        <input type="text" placeholder="your subject"/>
                    </div>

                    <textarea name="" placeholder="your message" id="" cols="30" rows="10"></textarea>

                    <input type="submit" value="send message" className="btn"/>

                </form>

            </div>

        </section>
    );
  }
  
  export default Contact;