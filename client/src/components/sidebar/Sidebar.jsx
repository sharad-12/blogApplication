import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    fetchCategories();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarItem">
          <div className="sidebarItemTitle">ABOUT ME</div>
          <div className="ab">
          <img
            src="https://www.bloggingwp.com/wp-content/uploads/2018/01/Travel-blog.jpeg"
            alt=""
            className="sidebarImg"
          />
          <p className="sidebarAbout">
            I am Deepak Gupta .I am Currently pursuing B.Tech Degree from Indian Institute of Information Technology,Una.I love to make blog on my daily life....
          </p>
          </div>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemTitle">CATEGORIES</div>
          <ul className="sidebarCategoryList">
            {categories.map((cat) => (
              <Link
                to={`/?category=${cat.name}`}
                className="link sidebarCategoryListItem"
                key={cat._id}
              >
                <li>{cat.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemTitle">FOLLOW US</div>
          <div className="sidebarIcons">
            <a
              href="https://www.instagram.com/deepak_gupta464/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram-square sidebarIcon"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/deepak-gupta-b07949214/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin sidebarIcon"></i>
            </a>

            <a 
              href="https://github.com/deepak-raj2002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github-square sidebarIcon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
