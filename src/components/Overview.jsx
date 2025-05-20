import tabletImg from "../assets/images/illustration-hero.svg";

const Overview = () => {
  return (
    <section className="overview">
      <div className="overview__image">
        <img src={tabletImg} alt="device img" />
      </div>
      <div className="overview__content">
        <h2>a simple bookmark manager</h2>
        <p>
          A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites
          load instantly. Try it for free.
        </p>
        <div className="overview__buttons">
          <button className="overview__button overview__button--blue">Get it on Chrome</button>
          <button className="overview__button">Get it on Firefox</button>
        </div>
      </div>
    </section>
  );
};

export default Overview;
