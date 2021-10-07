import React from "react";
import "../css/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div>
        <h1 className="description">Connect With Me !</h1>
      </div>

      <div>
        <p className="contact_text">
          I am always looking for any new opportunities. Whether you just want
          to say hi or have an opportunity for me, I will get back to you soon.
          I’ll try my best to get back to you!
        </p>
        <div>
          <button className="contact_button">
            <a
              href="mailto:madhav.koiralacs@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Send Message
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
