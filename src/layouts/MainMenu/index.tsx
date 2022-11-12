import { BorderlessTableOutlined, EditOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { useNavigate } from 'react-router-dom';

export default function MainMenu() {
  const navigate = useNavigate();

  const items: ItemType[] = [
    {
      icon: <EditOutlined />,
      key: 'playground',
      label: 'Playground',
    },
    {
      icon: <BorderlessTableOutlined />,
      key: 'about',
      label: 'About',
    },
  ];

  const onMenuSelect = ({ ...args }) => {
    switch (args.key) {
      case 'playground':
        navigate('/playground');
        break;
      case 'about':
        navigate('/about');
        break;
      default:
        navigate('/');
        break;
    }
  };

  return <Menu mode="inline" items={items} onSelect={onMenuSelect} />;
}
