import { useState } from "react";
function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(true);
    };
    return (
        <section className="contact">

            <h1 className="heading"> contact me </h1>

            <div className="row">


                <form onSubmit={handleSubmit}>

                    <div className="inputBox">
                        <input type="text" placeholder="your name"/>
                        <input type="number" placeholder="your number"/>
                    </div>

                    <div className="inputBox">
                        <input type="email" placeholder="your email"/>
                        <input type="text" placeholder="your subject"/>
                    </div>

                    <textarea name="" placeholder="your message" id="" cols="30" rows="10"></textarea>

                    {/* <input type="submit" value="send message" className="btn"/> */}
                    <button type="submit">Send</button>
                     {message && <span>Thanks, I'll reply ASAP :)</span>}
                    

                </form>

            </div>

        </section>
    );
  }
  
  export default Contact;