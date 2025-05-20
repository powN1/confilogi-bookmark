import { useEffect, useRef, useState } from "react";

const CountdownNumber = ({ start = 35000, duration = 20000 }) => {
  const [count, setCount] = useState(start);
  const startTimeRef = useRef(null);

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;

      const percentage = Math.min(progress / duration, 1);
      const newCount = Math.round(start * (1 - percentage));
      setCount(newCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, duration]);

  return <p>{count.toLocaleString("en-US")} joined</p>;
};

const NewsLetter = () => {
  const [inputValue, setInputValue] = useState("");
  const [errorEnabled, setErrorEnabled] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (inputValue.length === 0 || !inputValue.includes("@")) {
      setErrorEnabled(true);
      setTimeout(() => setErrorEnabled(false), 4000);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <section className="newsletter">
      <div className="newsletter__info">
        <CountdownNumber />
        <h3>Stay up-to-date with what we're doing</h3>
      </div>
      <form className="newsletter__contact" onSubmit={handleSubmitForm}>
        <div className="newsletter__contact__input">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your email address"
            className={"newsletter__contact__input__input " + (errorEnabled ? "error-active" : "")}
          />
          {errorEnabled && (
            <div className={"newsletter__contact__input__error"}>
              Whoops, make sure it's an email
            </div>
          )}
        </div>
        <button type="submit">contact us</button>
      </form>
    </section>
  );
};

export default NewsLetter;
