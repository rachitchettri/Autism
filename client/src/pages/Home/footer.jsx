import React from "react";
import "./footer.css";

export default function FooterBig4() {
  return (
    <footer className="footer-big-4 text-white">
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Testimonials</a></li>
        </ul>
      </div>

      <div>
        <h4>Support</h4>
        <ul>
          <li><a href="#">Help center</a></li>
          <li><a href="#">Terms of service</a></li>
          <li><a href="#">Status</a></li>
        </ul>
      </div>

      <div>
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Terms of service</a></li>
        </ul>
      </div>

      <div>
        <h4>Stay up to date</h4>
        <input
          type="email"
          placeholder="Your email address"
          className="footer-input"
        />
      </div>
    </footer>
  );
}