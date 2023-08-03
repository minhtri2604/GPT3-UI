import React from 'react'
import { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
const Navbar = () => {
  const [togleMenu, setToggleMenu] = useState(false)

  return (
    <div className='gpt3__navbar' >
      <div className='gpt__navbar-links'>
        <div className="gpt__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className='gpt3__navbar-links_container'>

          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>

        </div>

        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>

      </div>
      <div className="gpt__navbar-menu-mobile">

        {!togleMenu && <RiMenu3Line className="icon-menu" color="fff" size={27} onClick={() => setToggleMenu(true)} />}
        {togleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">

              <RiCloseLine className="icon-menu-close" color="fff" size={27} onClick={() => setToggleMenu(false)} />
              <div className='gpt3__navbar-menu-list'>
                <p><a href="#home">Home</a></p>
                <p><a href="#wgpt3">What is GPT3?</a></p>
                <p><a href="#possibility">Open AI</a></p>
                <p><a href="#features">Case Studies</a></p>
                <p><a href="#blog">Library</a></p>
                <div className='gpt3__navbar-mobile-sign'>
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
                </div>
              </div>
            </div>


          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar