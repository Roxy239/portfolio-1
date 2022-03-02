// import { useState } from "react";
// function Contact() {
//     const [message, setMessage] = useState(false);

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       setMessage(true);
//     };
//     return (
//         <section className="contact">

//             <h1 className="heading"> contact me </h1>

//             <div className="row">
//                 <form onSubmit={handleSubmit}>
//                  <div className="inputBox">
//                         <input type="text" placeholder="your name"/>
//                         <input type="number" placeholder="your number"/>
//                     </div>

//                     <div className="inputBox">
//                         <input type="email" placeholder="your email"/>
//                         <input type="text" placeholder="your subject"/>
//                     </div>

//                     <textarea name="" placeholder="your message" id="" cols="30" rows="10"></textarea>

//                     {/* <input type="submit" value="send message" className="btn"/> */}
//                     <button type=" submit" className="btn btn-danger">Send</button>
//                      {message && <span>Thanks, I'll reply ASAP :)</span>}
                    
//                 </form>

//             </div>

//         </section>
//     );
//   }
  
//   export default Contact;

// import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


function Contact() {
    // const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jf00lmk', 'Template_auto_mail', e.target, 'user_5fMCRpkqKhzNObz3uClhE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };

    return (
        <section className="contact">

            <h1 className="heading"> contact  </h1>
            <p>Interested to work together? Let's talk.</p>

            <div className="row">


                <form onSubmit={sendEmail}>

                    <div className="inputBox">
                        <input type="text" placeholder="your name" name='name'/>
                        <input type="number" placeholder="your number" name='phone'/>
                    </div>

                    <div className="inputBox">
                        <input type="email" placeholder="your email" name='email'/>
                        <input type="text" placeholder="your subject" name='subject'/>
                    </div>

                    <textarea placeholder="your message" id="" cols="30" rows="10" name='message'></textarea>

                    <input type="submit" value="send message" className="btn"/>

                </form>

            </div>

        </section>
    );
  }
  
  export default Contact;