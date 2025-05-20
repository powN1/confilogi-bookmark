import { useRef, useState } from "react";
import { ReactComponent as Arrow } from "../assets/images/icon-arrow.svg";
import { ArrowIcon } from "./ArrowIcon";

const faq = [
  {
    question: "What is Bookmark?",
  },
  {
    question: "How can I request a new browser?",
  },
  {
    question: "Is there a mobile app?",
  },
  {
    question: "What about other Chromium browsers?",
  },
];

const Faq = () => {
  const listRef = useRef(null);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleQuestionDropdown = (e) => {
    const list = e.currentTarget.children[1];
    const arrow = e.currentTarget.children[0].children[1].children[0];
    const text = e.currentTarget.children[0].children[0].textContent;
    if (list) {
      list.classList.toggle("show");
      arrow.classList.toggle("active");
      if (activeQuestion === text) setActiveQuestion(null);
      else setActiveQuestion(text);
    }
  };

  return (
    <div className="faq">
      <div className="faq__info">
        <h3>Frequently Asked Questions</h3>
        <p>
          Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
        </p>
      </div>
      <ul className="faq__questions">
        {faq.map((question, i) => (
          <li key={i} className="faq__questions__question" onClick={handleQuestionDropdown}>
            <div className="faq__questions__question__container">
              <p>{question.question}</p>
              <div className="faq__questions__question__container__arrow">
                <ArrowIcon />
              </div>
            </div>
            <ul ref={listRef}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, explicabo. Quia cum dolorum soluta odit
                quos accusantium consectetur cumque deleniti corrupti. Consequatur deleniti reprehenderit nostrum
                necessitatibus dolores obcaecati sequi recusandae. Totam, dolor dicta! Dolores iste in voluptatum
                adipisci sunt reiciendis voluptas alias quos perspiciatis est, reprehenderit labore odit!
              </p>
            </ul>
          </li>
        ))}
      </ul>
      <button>More Info</button>
    </div>
  );
};

export default Faq;
