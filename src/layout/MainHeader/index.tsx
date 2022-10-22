import { BellOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { useAppSelector } from '../../store/hooks';
import style from './index.module.less';

export default function MainHeader() {
  const count = useAppSelector((store) => store.unread.value);
  return (
    <Header className={style.siteLayoutHeader}>
      <span>header</span>
      <Badge count={count} className={style.notifyIcon}>
        <BellOutlined />
      </Badge>
    </Header>
  );
}
