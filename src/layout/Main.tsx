/* eslint-disable node/no-extraneous-import */
import { Button, Layout } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import style from './Main.module.css';
import MainHeader from './MainHeader';
import MainMenu from './MainMenu';

const { Content, Footer, Sider } = Layout;

export default () => {
  const [text, setText] = useState('Click me!');
  const onClickButton = async () => {
    try {
      const res = await axios.get('/api/hello-world');
      setText(res.data);
    } catch (e) {
      console.error(e);
      setText('Error occurs!');
    }
  };

  return (
    <Layout className={style.siteMainLayout}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className={style.siteLogo} />
        <MainMenu />
      </Sider>
      <Layout className={style.siteContentSide}>
        <MainHeader />
        <Content className={style.siteContent}>
          <div>
            <Button type="primary" onClick={onClickButton}>
              {text}
            </Button>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </Layout>
    </Layout>
  );
};
