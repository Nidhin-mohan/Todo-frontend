
import React from 'react'
import logo from './assets/logo.png'

function Header() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img className="w-10" src={logo} alt="logo" />
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>

          <span className="ml-3 text-xl">ToDo</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="/#" className="mr-5 hover:text-white">
            Home
          </a>
          <a href="/#" className="mr-5 hover:text-white">
            search
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header