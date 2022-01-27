import React, { useState, useEffect } from 'react'

import './App.css'

import { IconContext } from "@react-icons/all-files"
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { IoMdArrowDropdown } from '@react-icons/all-files//io/IoMdArrowDropdown'

import Headshot from "./img/headshot.png"
import Herovid from './img/herovid.mp4'

function App() {
  //initialize offset at 0
  const [offset, setOffset] = useState(0);
  //check how far page has scrolled and set offset
  window.onscroll = () => {
    setOffset(window.pageYOffset)
  }
  //log our offset
  useEffect(() => {
    console.log(offset)
    if (offset <= 400)
    document.body.querySelector("#projects-text").classList.remove('animate-text')
    if (offset >= 700)
    document.body.querySelector("#projects-text").classList.add('animate-text')
  }, [offset])

  return (
    <div className="App">
      <video autoPlay muted loop id="herovid">
        <source src={Herovid} type="video/mp4" />
      </video>
      <div className="whole" style={{background: `rgba(11,27,35,` + (0.7+offset/2000) + `)`}}>
        <section className="hero" style={{marginTop: offset/-1}}>
          <img className="headshot" alt="headshot" src={Headshot} />
          <h1>KAIFA BEST</h1>
          <h3>WEB DEVELOPER</h3>
          <IconContext.Provider value={{ color: "white", className: "network-icons", transition: "1s ease-in-out" }}>
            <div>
              <a target="blank_" href="https://twitter.com/KiteSura"><FaTwitterSquare onMouseOver={({target})=>target.classList.add("change-color")}
        onMouseOut={({target})=>target.classList.remove("change-color")} /></a>
              <a target="blank_" href="https://github.com/kaifab"><FaGithubSquare onMouseOver={({target})=>target.classList.add("change-color")}
        onMouseOut={({target})=>target.classList.remove("change-color")} /></a>
              <a target="blank_" href="https://linkedin.com/in/kaifa-best-84908375/"><FaLinkedin onMouseOver={({target})=>target.classList.add("change-color")}
        onMouseOut={({target})=>target.classList.remove("change-color")} /></a>
            </div>
          </IconContext.Provider>
        </section>
        <div className='scroll'>
          <h1>SCROLL</h1>
          <IoMdArrowDropdown className='carrot'/>
        </div>
        <section className='projects'>
          <h1 id="projects-text"> </h1>
        </section>
      </div>
    </div>
  );
}

export default App;
