/* eslint-disable node/no-extraneous-import */
import { Button, Layout } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import Routes from '../route';
import style from './Main.module.css';
import MainHeader from './MainHeader';
import MainMenu from './MainMenu';

const { Content, Footer, Sider } = Layout;

export default () => {
  return (
    <Layout className={style.siteMainLayout}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className={style.siteLogo} />
        <MainMenu />
      </Sider>
      <Layout className={style.siteContentSide}>
        <MainHeader />
        <Content className={style.siteContent}>
          <Routes />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </Layout>
    </Layout>
  );
};
