import React, { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper"> 
        <div className="topbarLeft">
          <a
            href="https://www.instagram.com/deepak_gupta464/"
            target="_blank"
            className="link"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram-square topbarIcon"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/deepak-gupta-b07949214/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin topbarIcon"></i>
          </a>

          <a
            href="https://github.com/deepak-raj2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github-square topbarIcon"></i>
          </a>
        </div>
        <div className="topbarCenter">
          <Link to="/" className="link">
            <span className="topbarCenterItem">HOME</span>
          </Link>
          <Link to="/about" className="link">
            <span className="topbarCenterItem">ABOUT</span>
          </Link>
          <Link to="/contact" className="link">
            <span className="topbarCenterItem">CONTACT</span>
          </Link>
          <Link to="/write" className="link">
            <span className="topbarCenterItem">WRITE</span>
          </Link>

          <span className="topbarCenterItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </span>
        </div>
        <div className="topbarRight">
          {user && (
            <Link to="/settings">
              <img
                src={
                  (user.profilePicture !== "")
                    ? PF + user.profilePicture
                    : `../../no-avatar.jfif`
                }
                alt=""
                className="topbarImg"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
