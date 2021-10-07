import React, { useState, useEffect } from "react";
import "../css/Aboutme.css";
import { motion } from "framer-motion";

function AboutMe() {
  const [printStatement, setprintStatement] = useState("");
  const [showStatement, setshowStatement] = useState(false);

  const string = "System.out.println(",
    index = React.useRef(0);

  useEffect(() => {
    function tick() {
      setprintStatement((prev) => prev + string[index.current]);
      index.current++;
    }
    if (index.current < string.length) {
      let addChar = setInterval(tick, 100);
      return () => clearInterval(addChar);
    }
    setshowStatement(true);
  }, [printStatement]);
  return (
    <div className="aboutMe">
      <motion.circle initial="hidden" animate="visible">
        <p className="printStatement">{printStatement}</p>
        {showStatement && (
          <div className="statement">
            <div>
              <p>" Thanks for visiting my page. It's me</p>
              <h1 className="name">Madhav Prasad Koirala</h1>
              <h1 className="description">
                <span></span>
              </h1>
            </div>
            <div>
              <p>
                I’m software engineer specialized in building digital
                experiences. Currently, I am focused on creating user centered &
                user accessible digital service for <a>Industry 4.0 </a>at{" "}
                <a href="https://fii-usa.com/" target="_blank" rel="noreferrer">
                  Foxconn Industrial Internet (FII)
                </a>
                ."
              </p>
            </div>
            <p className="printStatement">)</p>
          </div>
        )}
      </motion.circle>
    </div>
  );
}

export default AboutMe;
