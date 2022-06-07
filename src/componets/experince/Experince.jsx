import React from "react";
import "./expirnce.css";
import { BsShieldFillCheck } from "react-icons/bs";
const Experince = () => {
  return (
    <section id="experince">
      <h5>What's Skills I Have</h5>
      <h2>My Experince</h2>

      <div className="container experince__container">
        <div className="experince__frontend">
          <h3>Frontend Development</h3>
          <div className="experince__content">
            <article className="experince__details">
              <BsShieldFillCheck className="experince__details-icon" />
             <div>
             <h4>HTML</h4>
             <small className="text-light">EXperienced</small>
             </div>
            </article>
            <article className="experince__details">
              <BsShieldFillCheck className="experince__details-icon" />
           <div>
           <h4>CSS</h4>
              <small className="text-light">EXperienced</small>
           </div>
            </article>
            <article className="experince__details">
              <BsShieldFillCheck className="experince__details-icon" />
             <div>
             <h4>JavaScript</h4>
              <small className="text-light">EXperienced</small>
             </div>
            </article>
            <article className="experince__details">
              <BsShieldFillCheck className="experince__details-icon" />
            <div>
            <h4>Bootstrap</h4>
              <small className="text-light">EXperienced</small>
            </div>
            </article>

            <article className="experince__details">
              <BsShieldFillCheck className="experince__details-icon" />
           <div>
           <h4>React Js</h4>
              <small className="text-light">Intermediate</small>
           </div>
            </article>
            <article className="experince__details">
              <BsShieldFillCheck className="experince__details-icon" />
           <div>
           <h4>Three js</h4>
              <small className="text-light">Intermediate</small>
           </div>
            </article>
            <article className="experince__details">
              <BsShieldFillCheck className="experince__details-icon" />
           <div>
           <h4>WebAR & VR</h4>
              <small className="text-light">Intermediate</small>
           </div>
            </article>


          </div>
        </div>
        {/* END of Frontend */}
        <div className="experince__backend">
          <h3>Backend Development</h3>
          <div className="experince__content">
            <article className="experince__details">
              <BsShieldFillCheck className="experince__details-icon" />
            <div>
            <h4>Node Js</h4>
              <small className="text-light">Intermediate</small>
            </div>
            </article>
            <article className="experince__details">
              <BsShieldFillCheck className="experince__details-icon" />
             <div>
             <h4>Next Js</h4>
              <small className="text-light">EXperienced</small>
             </div>
            </article>
            <article className="experince__details">
              <BsShieldFillCheck className="experince__details-icon" />
             <div>
             <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
             </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experince;
