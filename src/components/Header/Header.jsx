// src/components/Header.jsx
'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './header.module.css'
import { Logo } from '@/components';
import { Menu } from '@/components/Menu';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.container}>
      <Logo
        width={198}
        height={74}
        caption={true}
        subtitle={false}
      />
      <nav ref={menuRef} className={`${styles.menu} ${menuOpen ? styles.active : ''}`}>
        <Menu />
      </nav>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;