import React from "react";

type Props = object;

const NavBar = (props: Props) => {
  return (
    <nav className="flex w-full justify-center h-24">
      <div
        className="navbar fixed z-10 backdrop-blur-sm drop-shadow-md top-2 max-w-screen-lg border-gray-300/50 rounded-2xl
        flex flex-row justify-around
       bg-white/10 text-black dark:bg-black/70 dark:text-white border-2"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Contact renoGPTz</a>
              </li>
              <li>
                <a>RenoCrypt GPTs Privacy Policies</a>
                <ul className="p-2">
                  <li>
                    <a>Customer Service Bot</a>
                  </li>
                  <li>
                    <a>GraphQLGPT</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl" href="https://www.renocrypt.com">
            RenoCrypt
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">renoGPTz</a>
            </li>

            <li>
              <a>Contact</a>
            </li>
            <li>
              <details>
                <summary>Privacy Policies</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden">
          <a className="btn">Button</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
