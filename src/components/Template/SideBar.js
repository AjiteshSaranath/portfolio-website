import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ajitesh Saranath</h2>
        <p>
          <a href="mailto:ajitesh.saranath@gmail.com">ajitesh.saranath@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Seasoned Software Engineer with demonstrated expertise in Backend Development and DevOps.
        I have successfully contributed as a Software Engineering Intern (DevOps) at KONE Elevator and as a Backend Software Development
        Engineer at Infiquity Auto Technologies Pvt Ltd. My professional journey reflects a strong technical foundation,
        problem-solving acumen, and a commitment to delivering robust and scalable solutions.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Ajitesh Saranath K
      </p>
    </section>
  </section>
);

export default SideBar;
