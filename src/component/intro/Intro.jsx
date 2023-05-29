import { useEffect, useRef } from "react";
import "./intro.scss";
import * as ityped from 'ityped';

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    ityped.init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Designer', 'Web Developer'],
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
            <img src="assets/man.png" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Manish</h1>
          <h3>
            Freelance <span ref={ textRef }></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt=""/>
        </a>
      </div>
    </div>
  )
}
