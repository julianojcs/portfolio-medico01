// src/components/Header.jsx
'use client';
import { useState } from 'react';
import styles from './header.module.css'
import { Logo } from '@/components';
import { Menu } from '@/components/Menu';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.container}>
      <Logo
        width={198}
        height={74}
        caption={true}
        subtitle={false}
      />
      <nav className={`${styles.menu} ${menuOpen ? styles.active : ''}`}>
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