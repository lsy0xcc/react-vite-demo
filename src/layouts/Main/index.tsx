import { Outlet } from 'react-router-dom';
import style from './index.module.css';
import MainHeader from '../MainHeader';
import MainMenu from '../MainMenu';

export default function MainLayout() {
  return (
    <div className={style.siteMainLayout}>
      <div className={style.siteMenu}>
        <div className={style.siteLogo} />
        <MainMenu />
      </div>
      <div className={style.siteContentSide}>
        <MainHeader />
        <div className={style.siteContent}>
          <Outlet />
        </div>
        <div style={{ textAlign: 'center' }}>Footer</div>
      </div>
    </div>
  );
}
