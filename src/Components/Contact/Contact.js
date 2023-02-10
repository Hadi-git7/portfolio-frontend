import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { useState, useEffect } from "react";
import "../Contact/Contact.css";

function Contact() {
  const form = useRef();
  const [Contact, setContact] = useState([]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dadkqng",
        "template_r4zn1kk",
        form.current,
        "JA2E7_Jd532oOh-Ue"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await axios.post("/api/contact");
        const result = await response.data;
        setContact(result);
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchContact();
  }, []);

  return (
    <div className="contact" id="contact">
      <div className="whatsapp-btn-container">
        <a className="whatsapp-btn" href="https://wa.me/96170115970">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
        <span>Contact Us</span>
      </div>

      <div className="cont-contact">
        <div className="contact-heading">
          <h2> Contact </h2>

          <p>Contact us for more information</p>
        </div>
        <div className="container">
          <div className="socials-media">
            <div className="socials-icons icon">
              <i class="fa-sharp fa-solid fa-location-dot"></i>
              <a href="https://goo.gl/maps/rtw8C5EEV7N6pJsz7">
                <h5>Adress</h5>
              </a>
            </div>

            <div className="socials-icons icon">
              <i class="fa-solid fa-envelope"></i>
              <a href="https://mail.google.com/">
                <h5>E-mail</h5>
              </a>
            </div>

            <div className="socials-icons icon">
              <i className="fa-brands fa-linkedin"></i>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sahar-chatah/">
                <h5>linkedin</h5>
              </a>
            </div>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder="Name" name="user_name" required />
              <input
                type="email"
                placeholder="E-mail"
                name="user_email"
                required
              />
              <input type="text" placeholder="Subject" required />
              <textarea
                placeholder="Message"
                name="message"
                required></textarea>
              <button type="submit" value="send" className="site-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
