'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuItems } from "@/utils/constants";
import styles from './menu.module.css'

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      {menuItems != null &&
      menuItems.map((item) => (
        <Link
          key={item.title}
          href={item.url}
          className={`${pathname === item.url && styles.active}`}
        >{item.title}</Link>
      ))}
    </nav>
  );
};

export default Menu;
