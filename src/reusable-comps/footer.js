import "../App.css";
import "react-bootstrap";
import "bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import ScrollToTop from "../scroll";

const FooterComponent = () => {
  return (
    <>
      <footer className="app-footer">
        <div id="footer-items1">
          <h5>Corporate</h5>
          <ul>
            <li>
              <Link to="careers" className="footer-links" onClick={() => ScrollToTop()}>
                Careers
              </Link>
            </li>
            <li>
              <Link to="partners" className="footer-links" onClick={() => ScrollToTop()}>
                Partners
              </Link>
            </li>
            <li>
              <Link to="investors" className="footer-links"onClick={() => ScrollToTop()}>
                Investor relations
              </Link>
            </li>
            <li>
              <Link to="leadership" className="footer-links" onClick={() => ScrollToTop()}>
                Leadership
              </Link>
            </li>
          </ul>
        </div>
        <div id="footer-items2">
          <h5>Community</h5>
          <ul>
            <li>
              <Link to="collaborate" className="footer-links" onClick={() => ScrollToTop()}>
                Collaborate
              </Link>
            </li>
            <li>
              <Link to="projects" className="footer-links" onClick={() => ScrollToTop()}>
                Community projects
              </Link>
            </li>
            <li>
              <Link to="customer-service" className="footer-links" onClick={() => ScrollToTop()}>
                Customer service
              </Link>
            </li>
            <li>
              <Link to="contact" className="footer-links" onClick={() => ScrollToTop()}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div id="footer-items3">
          <h5>Privacy policy</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
            mi venenatis, commodo ligula sit amet, ornare arcu. Quisque et
            pharetra ex, sed cursus mi. Etiam at posuere ante. Morbi ut ipsum
            imperdiet, facilisis velit quis, egestas est. Duis et nunc
            ullamcorper, finibus erat vel, iaculis diam. Donec sapien massa,
            tincidunt eu mollis sit amet, fermentum vitae sem. Curabitur eget
            metus sapien. Morbi hendrerit nisl ipsum, vel interdum quam posuere
            nec. Integer scelerisque velit est, a imperdiet tortor tincidunt
            vel. Phasellus at posuere felis. Ut viverra facilisis nibh nec
            imperdiet. Integer volutpat nunc nec lacinia pellentesque. Sed
            maximus, massa vitae faucibus efficitur, tortor ligula convallis
            lectus, ac dapibus risus nibh eget odio. In vitae pulvinar sapien.
            Aliquam arcu sapien, volutpat eget tempus eleifend, blandit ut ante.
            Nullam cursus ligula leo, ut convallis risus bibendum vitae. Quisque
            eu semper lorem. Sed interdum et eros vel placerat.
          </p>
        </div>
        <div id="footer-items4">
          <h5>Contact</h5>

          <div id="footer-span-wrapper">
            <span> Le Raffia LLC </span> <br></br>
            <span> 333 Invalid Street, Pittsburgh, </span> <br></br>
            <span> PA 10000,</span> <br></br>
            <span> Pennsylvania, </span> <br></br>
            <span> United States.</span> <br></br>
            <hr></hr>
            <p>
              Le Raffia is a sustainable company that sources its materials
              ethically. Our materials meet sustainability standards, as we seek
              to promote eco-friendliness. We comply with laws in international
              trade. We are an equal-opportunity employer, and are compliant
              with the laws governing commerce in the Commonwealth of
              Pennsylvania and the United States.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
