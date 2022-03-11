import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

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
    <div className="navigation">
      <ul>
        <li
          id="Home"
          className={`list${localStorage.getItem("selected") ? "" : " active"}`}
          onClick={activeLink}
        >
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faHouseChimney} />
            </span>
            <span className="text">Home</span>
          </a>
        </li>
        <li id="Profile" className="list" onClick={activeLink}>
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className="text">Profile</span>
          </a>
        </li>
        <li id="Messages" className="list" onClick={activeLink}>
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className="text">Messages</span>
          </a>
        </li>
        <li id="Photos" className="list" onClick={activeLink}>
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faCamera} />
            </span>
            <span className="text">Photos</span>
          </a>
        </li>
        <li id="Settings" className="list" onClick={activeLink}>
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faGear} />
            </span>
            <span className="text">Settings</span>
          </a>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default Navbar;
