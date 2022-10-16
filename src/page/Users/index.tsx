import { useRequest } from 'ahooks';
import { Button } from 'antd';
import { useState } from 'react';
import service from '../../service/main';

export default function Users() {
  const [text, setText] = useState('Click me!');
  const { loading, runAsync } = useRequest(
    () => service.get('/long-time-hello'),
    { manual: true },
  );

  const onButtonClick = async () => {
    try {
      const res = await runAsync();
      setText(res.data);
    } catch (e) {
      setText('error');
    }
  };

  return (
    <div>
      <Button type="primary" onClick={onButtonClick}>
        {loading ? 'loading' : text}
      </Button>
    </div>
  );
}
