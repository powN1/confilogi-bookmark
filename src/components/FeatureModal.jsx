import { useEffect, useRef, useState } from "react";
import closeIcon from "../assets/images/icon-close.svg";
import categories from "../data/categories"


const FeatureModal = () => {
  const [showFeatureModal, setShowFeatureModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [manualClose, setManualClose] = useState(false);
  const closeTimestampRef = useRef(null);

  const handleCategoryChange = (categoryTitle) => {
    const category = categories.find((cat) => cat.title === categoryTitle.toLowerCase());
    setCurrentCategory(category);
  };

  const handleShowFeatureModal = () => {
    setShowFeatureModal(false);
    setManualClose(true);
    closeTimestampRef.current = Date.now();
  };

  useEffect(() => {
    // Show modal after 30s
    const timer = setTimeout(() => {
      setShowFeatureModal(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const topThreshold = window.innerHeight * 0.1;

      const now = Date.now();
      const justClosed = manualClose && closeTimestampRef.current && now - closeTimestampRef.current < 3000;

      if (e.clientY <= topThreshold && !showFeatureModal && !justClosed) {
        setShowFeatureModal(true);
        setManualClose(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [showFeatureModal, manualClose]);

  useEffect(() => {
    // Disable scrolling when mobile menu is open
    if (showFeatureModal) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "visible";
      document.body.style.position = "";
      document.body.style.width = "";
    }
  }, [showFeatureModal]);

  return (
    showFeatureModal && (
      <section className="feature-modal">
        <button className="feature-modal__close" onClick={handleShowFeatureModal}>
          <img src={closeIcon} alt="closeIcon" />
        </button>
        <div className="feature-modal__container">
          <ul className="features-modal__container__categories">
            {categories.map((cat, i) => (
              <li key={i} onClick={() => handleCategoryChange(cat.title)}>
                <div className={currentCategory.title === cat.title ? "active" : ""}>{cat.title}</div>
              </li>
            ))}
          </ul>

          <div className="feature-modal__container__category-extended">
            <div className="feature-modal__container__category-extended__image">
              <img src={currentCategory.img} alt="feature img" />
            </div>
            <div className="feature-modal__container__category-extended__details">
              <h3>{currentCategory.heading}</h3>
              <p>{currentCategory.text}</p>
              <button>More Info</button>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default FeatureModal;
