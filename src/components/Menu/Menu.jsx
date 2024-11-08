import Link from 'next/link';
// import { menuItems } from "@/utils/constants";
// ou
// import menuData from '@/utils/db.json';
import styles from './menu.module.css'

const fetchMenuItems = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/menu`);
    // const response = await fetch('/api/menu'); // Como o fetch é feito no cliente, a URL deve ser absoluta
    if (!response.ok) {
      throw new Error('Failed to fetch menu items');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const Menu = async ({pathname}) => {
  const menuItems = await fetchMenuItems();
  // const {menuItems } = menuData;

  if (menuItems) {
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
  }
};