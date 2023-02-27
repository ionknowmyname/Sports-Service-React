import React, { useState } from "react";
import "../css/nav.css";

const Nav = () => {
  const [links, setLink] = useState([
    { name: "Home", link: "/user/dashboard" },
    { name: "Discover", link: "#" },
    { name: "Buddies", link: "#" },
    { name: "Profile", link: "/user/profile" },
  ]);

  const [open, setOpen] = useState(true);

  const hamburger = () => {
    setOpen(!open);
  };

  return (
    <main>
      <header id='header'>
        <nav className={`header_main-nav ${open ? "unclicked" : "clicked"}`}>
          <div className='header_main-nav-hamburger' onClick={hamburger}>
            {[...Array(3)].map((x, i) => (
              <div className={`line line-${i + 1}`} key={i}></div>
            ))}
          </div>
          <ul className='header_main-nav--links'>
            {links.map((link) => (
              <li
                key={link.name}
                className={`header_main-nav-link ${open ? "" : "fade"}`}>
                <a
                  href={link.link}
                  //   target='_blank'
                  rel='noopener noreferrer'
                  className='header_main-nav-link-anchor'
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </main>
  );
}

export default Nav;
