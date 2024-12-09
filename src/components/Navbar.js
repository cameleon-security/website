import React from "react";
import "../css/Navbar.css";
import Logo from "../assets/cameleon-logo.png";


export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);


  return (
    <>
      <header>
        <nav
          class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          px-5
          text-lg text-bg-cameleon-primary
          bg-cameleon-primary
        "
        >
          <div className="mt-2 flex justify-center">
            <img src={Logo} class="mx-auto" id="logo" alt="logo" />
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            onClick={() => setNavbarOpen(!navbarOpen)}
            class="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <div
            className={
              (navbarOpen ? "" : " hidden") +
              " w-full md:flex md:items-center md:w-auto"
            }
            id="menu"
          >
            <ul
              class="
              pt-4
              text-base text-white
              md:flex
              md:justify-between 
              md:pt-0"
            >
              <li>
                <a class="md:p-4 py-2 block hover:text-purple-400" href="/">
                  Home
                </a>
              </li>
              <li>
                <a class="md:p-4 py-2 block hover:text-purple-400" href="/contact">
                  Contact
                </a>
              </li>
              <li>
                <a class="md:p-4 py-2 mb-2 md:mb-0 block hover:text-purple-400" href="/services">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
