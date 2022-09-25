import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import style from './Main.module.css';
import MainHeader from './MainHeader';
import MainMenu from './MainMenu';

const { Content, Footer, Sider } = Layout;

export default function MainLayout() {
  return (
    <Layout className={style.siteMainLayout}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className={style.siteLogo} />
        <MainMenu />
      </Sider>
      <Layout className={style.siteContentSide}>
        <MainHeader />
        <Content className={style.siteContent}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </Layout>
    </Layout>
  );
}
