import React from "react";

export default () => {
  return (
    <footer className="footer-part">
      <div>
        <p>Get in touch.</p>
        <p>
          Do you have a project you’d like to discuss with us? we’re looking
          forward to hearing from you.
        </p>
        <p>
          <i className="far fa-envelope"></i>{" "}
          <a href="mailto:Info@cnanigerialtd.com" rel="noopener noreferrer">Info@cnanigerialtd.com</a> |{" "}
          <a href="mailto:cnabuildingco@gmail.com" rel="noopener noreferrer">cnabuildingco@gmail.com</a>
        </p>
        <p>
          <i className="fas fa-mobile-alt"></i>{" "}
          <a href="tel:+2349060002718" rel="noopener noreferrer">+2349060002718</a>
        </p>
        <p>
          <a href="https://www.facebook.com/cnabuilds" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>

          <a href="https://www.instagram.com/cnabuilds" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </p>
        &copy; 2018 Copyright: CNA Building Solutions Ltd.{" "}
        <a href="/policy">Privacy Policy</a> |
        <a href="/terms">Terms of Service</a>
      </div>
    </footer>
  );
};
