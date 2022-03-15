import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faUser, faMessage, faCamera, faGear } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    localStorage.getItem("selected") &&
      document
        .getElementById(localStorage.getItem("selected"))
        .classList.add("active");
  }, []);

  function activeLink(e) {
    let list = document.querySelectorAll(".list");

    list.forEach((item) => item.classList.remove("active"));

    e.currentTarget.classList.add("active");

    localStorage.setItem("selected", e.currentTarget.innerText);
  }

  return (
    <div className="flex justify-center h-full">
    <div className="navigation mb-[2.25vw] self-end">
      <ul id="icons" className="text-[100%] w-full flex justify-evenly">
        <li
          id="Home"
          className={`list${localStorage.getItem("selected") ? "" : " active"}`}
          onClick={activeLink}
        >
          <a href="#">
            <Link to="/">
              <span className="icon">
                <FontAwesomeIcon icon={faHouseChimney} />
              </span>
              <span className="text">Home</span>
            </Link>
          </a>
        </li>
        <li id="Profile" className="list" onClick={activeLink}>
          <a href="#">
            <Link to="/profile">
              <span className="icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="text">Profile</span>
            </Link>
          </a>
        </li>
        <li id="Messages" className="list" onClick={activeLink}>
          <a href="#">
            <Link to="/messages">
              <span className="icon">
                <FontAwesomeIcon icon={faMessage} />
              </span>
              <span className="text">Messages</span>
            </Link>
          </a>
        </li>
        <li id="Photos" className="list" onClick={activeLink}>
          <a href="#">
            <Link to="/camera">
              <span className="icon">
                <FontAwesomeIcon icon={faCamera} />
              </span>
              <span className="text">Photos</span>
            </Link>
          </a>
        </li>
        <li id="Settings" className="list" onClick={activeLink}>
          <a href="#">
            <Link to="/settings">
              <span className="icon">
                <FontAwesomeIcon icon={faGear} />
              </span>
              <span className="text">Settings</span>
            </Link>
          </a>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
