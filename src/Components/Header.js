
import React from 'react'
import logo from './assets/logo.png'

function Header() {
  return (
    <header class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img className="w-10" src={logo} alt="logo" />
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>

          <span class="ml-3 text-xl">ToDo</span>
        </div>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="/#" class="mr-5 hover:text-white">
            Home
          </a>
          <a href="/#" class="mr-5 hover:text-white">
            Todos
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header