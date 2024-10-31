'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuItems } from "@/utils/constants";
import styles from './menu.module.css'

export const Menu = () => {
  const pathname = usePathname();

  return (
    <>
      {menuItems != null &&
        menuItems.map((item) => (
          <Link
            key={item.title}
            href={item.url}
            className={`${styles.item} ${pathname === item.url && styles.active}`}
          >
            {item.title}
          </Link>
        ))}
    </>
  );
};