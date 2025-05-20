import bookmarkLogo from "../assets/images/logo-bookmark.svg";
import hamburgerIcon from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import BookmarkIcon from "./BookmarkIcon";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuShow = () => {
    setShowMobileMenu((prev) => {
      
      // Disable scrolling when mobile menu is open
      if (!prev) {
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
      } else {
        document.body.style.overflow = "visible";
        document.body.style.position = "";
        document.body.style.width = "";
      }
      return !prev
    });
  };

  return (
    <header>
      <Link to="/" className="header__logo">
        <img src={bookmarkLogo} alt="bookmark logo" />
      </Link>
      <ul className="header__links">
        <Link to="/" className="header__links__link">
          features
        </Link>
        <Link to="/" className="header__links__link">
          pricing
        </Link>
        <Link to="/" className="header__links__link">
          contact
        </Link>
        <Link to="/" className="header__links__link header__links__link--login">
          login
        </Link>
      </ul>
      <button className="header__hamburger" onClick={handleMobileMenuShow}>
        <img src={hamburgerIcon} alt="hamburger icon" />
      </button>

      {showMobileMenu && (
        <div className="header__mobile-menu">
          <div className="header__mobile-menu__top">
            <Link to="/" className="header__mobile-menu__top__logo">
              <BookmarkIcon />
            </Link>

            <button className="header__mobile-menu__top__close" onClick={handleMobileMenuShow}>
              <img src={closeIcon} alt="close icon" />
            </button>
          </div>

          <ul className="header__mobile-menu__links">
            <Link to="/" className="header__mobile-menu__links__link">
              features
            </Link>
            <Link to="/" className="header__mobile-menu__links__link">
              pricing
            </Link>
            <Link to="/" className="header__mobile-menu__links__link">
              contact
            </Link>
            <Link to="/" className="header__mobile-menu__links__link header__mobile-menu__links__link--login">
              login
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
