import React from "react";
import "./header.css"

function Header() {
    return(
        <>
      <header className="main-header" style={{boxShadow: "rgba(12, 14, 19, 0) 0px 2px 16px 0px", background: "rgba(12, 14, 19, 0)"}}>
      
      <div className="section-container">
          <a href="#" className="logo">
              <img src="/images/Delphinium.svg" alt="Delphinium" width="150" /> 
          </a>
          <div className="right-navigation">
              <ul className="list-unstyled main-menu">
                  <li>
                      <a href="portfolio.html">
                          PORTFOLIO
                      </a>
                  </li>
                  <li>
                      <a href="people.html">
                          PEOPLE
                      </a>
                  </li>
                  <li>
                      <a href="process.html">
                          PROCESS
                      </a>
                  </li>
              </ul>
              <a href="javascript:void(0)" className="menu-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 22 9">
                      <g fill="#FFF" fillRule="evenodd" stroke="#FFF" strokeLinecap="round" strokeWidth="2.16">
                          <path d="M2 1.36h18.153M2 7.823h18.153"></path>
                      </g>
                  </svg>
              </a>
          </div>
      </div>
  </header>
        </>
    )
}
export default Header ;