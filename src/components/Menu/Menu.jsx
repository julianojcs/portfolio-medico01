import Link from 'next/link';
// import { getMenuItems } from '@/db/menu';
import styles from './menu.module.css'
import menuData from '@/utils/db.json';

// const menuItems = getMenuItems();

export const Menu = ({pathname}) => {
  const { menuItems } = menuData;
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