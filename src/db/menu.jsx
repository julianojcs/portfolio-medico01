// import { menuItems } from "@/utils/constants";
// import menuData from '@/utils/db.json';

export const getMenuItems = async () => {
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