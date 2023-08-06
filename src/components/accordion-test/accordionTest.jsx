import { React, useState } from "react";
import "./accordionTest.css";
import { useSpring, animated } from "@react-spring/web";

function AccordionTest(props) {
  const [isOpen, setIsOpen] = useState(false);

  let toggleHandler = (e) => {
    console.log("trocou");
    //switch state
    setIsOpen(!isOpen);
  };

  //conditional styling
  const styles = {
    //if open is true, show content
    accordionTitle: {
      color: open ? "#10d6f5" : "#fff",
    },
  };
  //open animation with react spring

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "25px" },
    to: { opacity: "1", maxHeight: open ? "120px" : "25px" },
    config: { duration: "300" },
  });

  return (
    <animated.div className="accordion" style={openAnimation}>
      <div className="accordion-title" onClick={toggleHandler}>
        <h4>{props.title}</h4>
      </div>
      <div>
        <p className="accordion-content" aria-expanded={!isOpen}>
          {props.text}
        </p>
      </div>
    </animated.div>
  );
}

export default AccordionTest;
