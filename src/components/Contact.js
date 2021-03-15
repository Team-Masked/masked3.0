import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_e84rhfk",
                "template_4x7ax47",
                e.target,
                "user_M5HZ3LWEovpJ8zwTIAfpB"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    }

    return (
        <div className="container">
            <form className="contact-form" onSubmit={sendEmail}>
                <div className="form__element">
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Your Name..."
                        name="name"
                    ></input>
                </div>
                <div className="form__element">
                    <label>Email id</label>
                    <input
                        type="text"
                        placeholder="Your Email id..."
                        name="emailid"
                    ></input>
                </div>
                <div className="form__element">
                    <label>Question or Message</label>
                    <textarea
                        type="text"
                        placeholder="Your Question or Message..."
                        name="question"
                    ></textarea>
                </div>
                <div className="form__btns">
                    <input
                        className="btns"
                        type="submit"
                        value="Send Message"
                    ></input>
                </div>
            </form>
        </div>
    );
}

export default Contact;
