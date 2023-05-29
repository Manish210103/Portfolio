import "./topbar.scss";
import personIcon from "./icons/Person.png";
import emailIcon from "./icons/Email.png";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Phoneix.
          </a>
          <div className="itemContainer">
            <img src={personIcon} alt="person" width="20" height="20"  />
            <span>+44 924 12 74</span>
          </div>
          <div className="itemContainer">
            <img src={emailIcon} alt="person" width="20" height="20" />
            <span>portfolio@phoneix.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
