import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';
import MainHeader from '../MainHeader';
import MainMenu from '../MainMenu';

const siteMainLayout = css`
  height: 100%;
  display: flex;
`;
const siteMenu = css`
  width: 200px;
  background: #ccc;
`;
const siteLogo = css`
  height: 32px;
  margin: 16px;
  background: #7777;
`;
const siteContentSide = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;
const siteContent = css`
  margin: 24px 16px 0;
  flex: 1 1 auto;
`;
const siteFooter = css`
  text-align: center;
`;
const redText = css`
  color: #c77;
`;

export default function MainLayout() {
  return (
    <div css={siteMainLayout}>
      <div css={siteMenu}>
        <div css={siteLogo} />
        <MainMenu />
      </div>
      <div css={siteContentSide}>
        <MainHeader />
        <div css={siteContent}>
          <Outlet />
        </div>
        <div css={[siteFooter, Math.random() > 0.5 ? null : redText]}>
          Footer
        </div>
      </div>
    </div>
  );
}
