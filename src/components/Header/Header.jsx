// src/components/Header.jsx
'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './header.module.css'
import { Logo } from '@/components';
import { Menu } from '@/components/Menu';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

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
        width={300}
        height={111}
        caption={false}
        subtitle={false}
      />
      <nav ref={menuRef} className={`${styles.menu} ${menuOpen ? styles.active : ''}`}>
        <Menu
          pathname={pathname}
        />
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