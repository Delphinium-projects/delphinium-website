import React from "react";
import  "./hero.css";

function Hero() {
    return(
        <>
        <section className="home-section">
       
        <section className="home-section-1">
            
            <img className="bg-img lazyautosizes ls-is-cached lazyloaded" alt="" src="/images/hero.png" />
            
            <p className="scroll-down link">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7">
                    <path fill="#FFFFFF" fillRule="evenodd" d="M11.5.924L6.017 6.5.534.924"></path>
                </svg>
                <a href="javascript:void(0)" className="scroll-into-view-btn">
                    SCROLL TO LEARN MORE
                </a>
            </p>
            <div className="section-wrapper">
                <div className="content">
                    <h2 className="heading">UX is the Differentiator.</h2>
                    <p className="desc">
                        ProCreator is an award-winning UI/UX Design agency in Mumbai, focusing on establishing an end to
                        end product solution; everything from product design to development
                    </p>
                </div>
            </div>
        </section>
     
    </section>
        </>
    )
}
export default Hero;