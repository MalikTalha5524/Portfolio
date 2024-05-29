import React, { useRef } from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";

import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_z69mq46", "template_59c2c4p", form.current, "63YIFUd6UWo0abOF-");
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>talhadev45@gmail.com</h5>
            <a href="mailto:talhadev45@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Muhammad Talha</h5>
            <a href="http://m.me/profile.php?id=100054201919348" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+923037160102</h5>
            <a href="https://api.whatsapp.com/send?phone+923037160102" target="_blank">
              Send a Message
            </a>
          </article>
        </div>
        {/* end of contact options  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary left">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
