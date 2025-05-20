import logoChrome from "../assets/images/logo-chrome.svg";
import logoFirefox from "../assets/images/logo-firefox.svg";
import logoOpera from "../assets/images/logo-opera.svg";
import dots from "../assets/images/bg-dots.svg";

const browsers = [
  {
    name: "Chrome",
    logo: logoChrome,
    minVersion: 62,
  },
  {
    name: "Firefox",
    logo: logoFirefox,
    minVersion: 55,
  },
  {
    name: "Opera",
    logo: logoOpera,
    minVersion: 46,
  },
];

const Download = () => {
  return (
    <section className="download">
      <div className="download__info">
        <h3>Download the extension</h3>
        <p>
          We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to
          prioritize.
        </p>
      </div>
      <div className="download__cards">
        {browsers.map((browser, i) => (
          <div key={i} className="download__cards__card"
          style={{ "--stagger-index": `${i}` }}
          >
            <div className="download__cards__card__logo">
              <img src={browser.logo} alt="browser logo" />
            </div>
            <h4>Add to {browser.name}</h4>
            <p>Minimum version {browser.minVersion}</p>

            <div className="download__cards__card__dots">
              <img src={dots} alt="dots" />
            </div>
            <button>Add & Install extension</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Download;
