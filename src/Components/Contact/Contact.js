import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Contact/Contact.css";

function Contact() {
  const form = useRef();

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
        }
        // (error) => {
        //   console.log(error.text);
        //   0;
        // }
      );
    e.target.reset();
  };

  return (
    <div className="contact">
      <div className="whatsapp-btn-container">
        <a className="whatsapp-btn" href="https://wa.me/9619999999">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
        <span>Contact Us</span>
      </div>

      <div className="cont-contact">
        <div className="contact-heading">
          <h2> Contact </h2>
          <hr />
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="container">
          <div className="socials-media">
            <div className="socials-icons icon">
              <i class="fa-sharp fa-solid fa-location-dot"></i>
              <a href="https://google.map.com">
                <h5>Adress</h5>
              </a>
            </div>

            <div className="socials-icons icon">
              <i class="fa-solid fa-envelope"></i>
              <a href="https://gmail.com">
                <h5>E-mail</h5>
              </a>
            </div>

            <div className="socials-icons icon">
              <i class="fa-brands fa-linkedin"></i>
              <a href="https://linkedinzz.com">
                <h5>Linkedin</h5>
              </a>
            </div>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="E-mail" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Message" required></textarea>
              <button type="submit" className="site-btn">
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
