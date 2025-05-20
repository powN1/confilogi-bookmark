import { Link } from "react-router-dom";
import FacebookIcon from "../components/FacebookIcon.jsx";
import TwitterIcon from "../components/TwitterIcon.jsx";
import BookmarkIcon from "../components/BookmarkIcon.jsx";

const Footer = () => {
  return (
    <footer>
      <div className="footer__wrapper">
        <Link to="/" className="footer__wrapper__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <BookmarkIcon />
        </Link>
        <div className="footer__wrapper__links-container">
          <Link className="footer__wrapper__links-container__link">features</Link>
          <Link className="footer__wrapper__links-container__link">pricing</Link>
          <Link className="footer__wrapper__links-container__link">contact</Link>
        </div>
        <div className="footer__wrapper__social-links-container">
          <Link to="/" className="footer__wrapper__social-links-container__link">
            <FacebookIcon />
          </Link>
          <Link to="/" className="footer__wrapper__social-links-container__link">
            <TwitterIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
