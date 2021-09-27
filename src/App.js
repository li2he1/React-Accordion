import "./styles.css";
import { useState } from "react";

const data = [
  {
    question: "Do you offer support if I need help?",
    answer:
      "Yes! High-quality customer support is extremely important for a quality product, that’s why we do our best to resolve any issues you may encounter."
  },
  {
    question: "What does premium support include?",
    answer:
      "We value our clients and you can always feel free to contact us for:Installing and adjusting\n bug fixing and troubleshooting"
  },
  {
    question:
      "What should I do if I need help with installation and adjusting?",
    answer:
      "We are ready to help with this! You can always contact us at apps@elfsight.com and we will help you to set up and change the settings of the app on your website the way you need."
  }
];

export default function App() {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, index) => (
          <div className="item">
            <div className="title" onClick={() => toggle(index)}>
              <h2>{item.question}</h2>
              <span>{selected === index ? "-" : "+"}</span>
            </div>
            <div className={selected === index ? "content show " : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
