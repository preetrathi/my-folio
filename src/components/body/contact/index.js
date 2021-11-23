import React from "react";
import Seperator from "../../common/seperator";
import SocialContacts from "../../common/social-contacts";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <Seperator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? COntact me on any of the Platform</p>
          <SocialContacts />
        </div>
        <div className="downlaod">
          <a className="download" download href={require("../../../assets/resume.pdf").default}>
            <i class="fi-rr-cloud-download download-icon"></i>Downlaod Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
