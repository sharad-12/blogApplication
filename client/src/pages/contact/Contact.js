import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contactWrapper">
        <h1 className="contactTitle">Connect with us!!</h1>
        <div className="contactIcons">
          <a
            href="https://www.instagram.com/deepak_gupta464/"
            target="_blank"
            rel="noopener noreferrer"
            className="link conIcon"
          >
            <i class="fab fa-instagram-square"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/deepak-gupta-b07949214/"
            rel="noopener noreferrer"
            target="_blank"
            className="link conIcon"
          >
            <i class="fab fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/deepak-raj2002"
            rel="noopener noreferrer"
            target="_blank"
            className="link conIcon" 
          >
            <i class="fab fa-github-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
