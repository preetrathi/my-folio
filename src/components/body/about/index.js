import React from "react";
import SocialContacts from "../../common/social-contacts";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there, I am <br /> <span className="info-name">Preet Rathi</span>
          . <br />I love experimating with the web.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png").default}
            className="photo"
          />
        </div>
      </div>
      <SocialContacts />
    </div>
  );
}

export default About;
