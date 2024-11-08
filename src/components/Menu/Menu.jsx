import Link from 'next/link';
import { getMenuItems } from '@/db/menu';
import styles from './menu.module.css'

export const Menu = async ({pathname}) => {
  const menuItems = await getMenuItems();
  // const {menuItems } = menuData;
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