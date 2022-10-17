import { useRequest } from 'ahooks';
import { Button } from 'antd';
import { useState } from 'react';
import service from '../../service/main';
import showErrorModal from '../../util/showErrorModal';
import style from './index.module.css';

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

  const showMyModal = () => {
    showErrorModal({});
  };
  const showMyModalWithProp = () => {
    showErrorModal({}, { titleBold: false });
  };

  return (
    <div>
      <div className={style.mainContainer}>
        <h1>Playground</h1>
        <div>
          <h2>ahooks</h2>
          <Button type="primary" onClick={onButtonClick}>
            {loading ? 'loading' : text}
          </Button>
        </div>
        <div>
          <h2>modal</h2>
          <Button onClick={showMyModal}>
            show error modal with bold title
          </Button>
          <Button onClick={showMyModalWithProp}>
            show error modal with normal title
          </Button>
        </div>
      </div>
    </div>
  );
}
