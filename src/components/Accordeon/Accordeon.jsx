import React, { useState } from "react";
import "./Accordeon.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const AccordeonButton = ({ label, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle accordion
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleAccordion}
        className={`Accordeon-button ${isOpen ? "Accordeon-button_open" : ""}`}
      >
        {isOpen ? (
          <>
            {label} <FontAwesomeIcon icon={faAngleUp} />
          </>
        ) : (
          <>
            {label} <FontAwesomeIcon icon={faAngleDown} />
          </>
        )}
      </button>

      <div className={`Accordeon-content ${isOpen ? "open" : ""}`}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p> {content}</p>
        )}
      </div>
    </div>
  );
};

export default AccordeonButton;
