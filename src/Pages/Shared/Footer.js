import React from "react";
import { Link } from "react-router-dom";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <div
      style={{
        background: `url(${footer})`,
        backgroundSize: "100% 100%",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <footer className="footer p-10 lg:justify-around max-w-screen-2xl mx-auto">
        <div>
          <span className="footer-title">Services</span>
          <Link to="" className="link link-hover">
            Emergency Checkup
          </Link>
          <Link to="" className="link link-hover">
            Monthly Checkup
          </Link>
          <Link to="" className="link link-hover">
            Weekly Checkup
          </Link>
          <Link to="" className="link link-hover">
            Deep Checkup
          </Link>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <Link to="" className="link link-hover">
            Flouride Treatment
          </Link>
          <Link to="" className="link link-hover">
            Cavity Filling
          </Link>
          <Link to="" className="link link-hover">
            Teeth Whitening
          </Link>
        </div>
        <div>
          <span className="footer-title">ABOUT</span>
          <Link to="" className="link link-hover">
            Terms of use
          </Link>
          <Link to="" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
      <div className="text-center mt-6 pb-10">
        <p>Copyright © 2022 - All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
