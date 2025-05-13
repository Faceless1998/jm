import React, { useState } from 'react';
import styled from 'styled-components';
import LanguageSwitcher from './LanguageSwitcher';

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;

  @media (max-width: 1000px) {
    display: block;
    position: absolute;
    right: 20px;
    top: 20px;
  }

  span {
    display: block;
    width: 30px;
    height: 3px;
    margin: 6px 0;
    position: relative;
    background: #fff;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
  }

  &.open span:first-child {
    transform: rotate(45deg) translate(2px, -2px);
  }

  &.open span:nth-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  &.open span:last-child {
    transform: rotate(-45deg) translate(1px, -1px);
  }
`;

const MenuOverlay = styled.div`
  display: none;
  
  @media (max-width: 1000px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 999;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease, visibility 0.3s ease;
    
    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      background-color:#2323c252;
      
      .mobile-language-switcher {
        margin: 20px 0;
      }
      
      a {
        color: #000;
        text-decoration: none;
        font-size: 24px;
        margin: 15px 0;
        font-weight: bold;
        transition: transform 0.3s ease;
        
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;

const MobileMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  return (
    <>
      <MenuButton className={isOpen ? 'open' : ''} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
      <MenuOverlay isOpen={isOpen}>
        <nav>
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              onClick={() => {
                toggleMenu();
              }}
            >
              {link.text}
            </a>
          ))}
          <div className="mobile-language-switcher">
            <LanguageSwitcher />
          </div>
        </nav>
      </MenuOverlay>
    </>
  );
};

export default MobileMenu;