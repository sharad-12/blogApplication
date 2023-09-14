import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <div className="aboutWrapper">
        <h1 className="aboutTitle">ABOUT US</h1>
        <h4 className="aboutDesc">
          Hello Blogger!! Welcome to <span>BLOG GRID</span>.
        </h4>
        <p>
          <span>Blog Grid </span>is a blogging platform which provides you
          interesting content, which you will like very much. We're dedicated to
          providing you the best of
          <span> fashion, health, tourism, self care</span> blogs with a focus on
          dependability and health & self care.Here you can posts about all your blog be it travel,food,health etc.You can also upload Images related to your blog and share it with anyone.
        </p> 
        <h2>Want to write a blog??</h2>
        <Link to="/write">
          <button> Click to Write a Blog</button>
        </Link>
      </div>
    </div>
  );
}
