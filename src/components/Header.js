import logo from '../assets/img/logo.png'
import React, { useState } from "react";

const navItems = ["Главная", "Технология", "График полетов", "Гарантии", "О комании", "Контакты"]

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(prev => !prev)
  }

  return (
    <header className="header">
      <div className="fixed-container header__flex">
        <div className='header__logo'>
          <img  alt='logo' src={logo}></img>
        </div>

        <nav className={openMenu ? 'header__nav nav nav_open' : 'header__nav nav'}>
          <ul className='nav__list'>
            {
              navItems.map((item, index) => {
                return (
                  <li className='nav__item' key={index}>
                    <a href='#'>
                      {item}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </nav>
        <button className='header__burger' onClick={() => toggleMenu()}>
        <svg version="1.1" id="Capa_1" width="20px" height="20px" x="0px" y="0px"
						viewBox="0 0 384.97 384.97">
						<g id="Menu">
							<path d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
								C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z"/>
							<path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
								S379.58,180.455,372.939,180.455z"/>
							<path d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909
								c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z"/>
                </g>
        </svg>
        </button>
      </div>
    </header>
    
  )
}

export default Header;