import { useState } from "react";
import categories from "../data/categories"

const Features = () => {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const handleCategoryChange = (categoryTitle) => {
    const category = categories.find((cat) => cat.title === categoryTitle.toLowerCase());
    setCurrentCategory(category);
  };

  return (
    <section className="features">
      <div className="features__container">
        <h3>Features</h3>
        <p>
          Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between
          your devices so you can access them on the go.
        </p>
        <ul className="features__container__categories">
          {categories.map((cat, i) => (
            <li key={i} onClick={() => handleCategoryChange(cat.title)}>
              <div className={currentCategory.title === cat.title ? "active" : ""}>{cat.title}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="features__category-extended">
        <div className="features__category-extended__image">
          <img src={currentCategory.img} alt="feature img" />
        </div>
        <div className="features__category-extended__details">
          <h3>{currentCategory.heading}</h3>
          <p>{currentCategory.text}</p>
          <button>More Info</button>
        </div>
      </div>
    </section>
  );
};

export default Features;
