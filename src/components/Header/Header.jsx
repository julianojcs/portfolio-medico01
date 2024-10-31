import style from './header.module.css'
import { Logo } from '@/components';
import { Menu } from '@/components/Menu';

export const Header = () => {
  return (
    <header className={style.container}>
        <Logo
          width={198}
          height={74}
          // classname={`${pathname === '/' && 'active'}`}
          // color={`${pathname === '/' ? 'var(--theme-color6-hex)' : 'var(--theme-color1-hex)'}`}
          caption={true} subtitle={false}/>
      <Menu />
    </header>
  );
};

export default Header;