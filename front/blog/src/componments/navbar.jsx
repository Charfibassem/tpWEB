import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="contenu">
          <div className="info">
            <img
              src="data:image/jpeg;base64,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"
              alt="non"
            />
            <span className="nom">
              <span className="firsname"> Bassem</span>
              <span className="lastname">Charfi</span>
            </span>
          </div>
          <div className="dom"> 
            <a href="#" id="news">
              News
            </a>
            <a href="#" id="foot">
              Foot
            </a>
            <a href="#" id="war">
              War
            </a>
            <a href="#" id="films">
              Films
            </a>
            <a href="#" id="games">
              Games
            </a>
            <a href="#" id="education">
              Education
            </a>
            <span ></span>
            <div className="trans">
              <Link to="/Login">
                return Login
                <div class="arrow-w">
                  <div class="arrow"></div>
                </div>
              </Link>
              <Link to="/Inscri">
                return Singing 
                <div class="arrow-w">
                  <div class="arrow"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
