import React from 'react'
import './service.css'
import {FaCheckSquare} from 'react-icons/fa'
const Service = () => {
  return (
    <section id="service">
          <h5>What I Offer</h5>
          <h2>Service</h2>

        <div className="container service__container">
              <article className="service">
                <div className="service__head">
                  <h3>UI/UX Design</h3>
                </div>
                    <ul className="service__list">
                        {/* <li>
                        <FaCheckSquare className="service__list-icon" />
                        <p>Interactive graphic design</p>
                        </li> */}
                        <li>
                        <FaCheckSquare className="service__list-icon" />
                        <p>Dynamic design</p>
                        </li>
                        <li>
                        <FaCheckSquare className="service__list-icon" />
                        <p>Ease of navigation</p>
                        </li>
                    </ul>
              </article>
            {/* END Of UI/UX */}
            <article className="service">
                <div className="service__head">
                  <h3>Web Development</h3>
                </div>
                    <ul className="service__list">
                        <li>
                        <FaCheckSquare className="service__list-icon" />
                        <p>Web solution engineering</p>
                        </li>
                        <li>
                        <FaCheckSquare className="service__list-icon" />
                        <p>Quality assurance</p>
                        </li>
                        <li>
                        <FaCheckSquare className="service__list-icon" />
                        <p>24/7 support</p>
                        </li>
                    </ul>
              </article>
            {/* WEB Development */}
            {/* <article className="service">
                <div className="service__head">
                  <h3>Content Creation</h3>
                </div>
                    <ul className="service__list">
                        <li>
                        <FaCheckSquare className="service__list-icon" />
                        <p></p>
                        </li>
                        <li>
                        <FaCheckSquare className="service__list-icon" />
                        <p>lerom</p>
                        </li>
                        <li>
                        <FaCheckSquare className="service__list-icon" />
                        <p>lerom</p>
                        </li>
                    </ul>
              </article> */}
          </div>


    </section>
  )
}

export default Service