'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.css'
import Menu from '@/components/Menu';
import Logo from '@/components/Logo';

const Header = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <Link href='/' >
        <Logo
          width={99}
          height={37}
          color={`${pathname === '/' ? 'var(--theme-color6-hex)' : 'var(--theme-color1-hex)'}`}
          caption={true} subtitle={false}/>
      </Link>
      <Menu />
    </div>
  );
};

export default Header;