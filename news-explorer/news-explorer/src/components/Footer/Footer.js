/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-block">
      <span className="footer-block__copyright">
        © 2021 Supersite, Powered by News API
      </span>
      <div className="footer-block__container">
        <nav className="footer-block__links">
          <Link className="footer-block__link" to="/">
            Home
          </Link>
          <a
            className="footer-block__link"
            href="https://practicum.yandex.com/"
            target="_blank"
            rel="noreferrer"
          >
            Practicum by Yandex
          </a>
        </nav>
        <nav className="footer-block__social">
          <a
            target="_blank"
            rel="noreferrer"
            className="footer-block__social-link footer-block__social-link_type_git"
            href="https://github.com/"
          ></a>
          <a
            target="_blank"
            rel="noreferrer"
            className="footer-block__social-link footer-block__social-link_type_facebook"
            href="https://facebook.com/"
          ></a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
