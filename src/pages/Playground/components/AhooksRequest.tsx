import { useRequest } from 'ahooks';
import { Button, Input } from 'antd';
import { useState } from 'react';
import simpleReq from '../../../services/simpleReq';

export default function AhooksRequest() {
  const [text, setText] = useState('Click me!');
  const { loading, runAsync } = useRequest(simpleReq.getHello, {
    manual: true,
  });
  const onButtonClick = async () => {
    try {
      const res = await runAsync();
      console.log(res);
      setText(res.data);
    } catch (e) {
      console.error(e);
      setText('error');
    }
  };

  const [inputName, setInputName] = useState('');
  const [greatResult, setGreatResult] = useState('');
  const { loading: getHelloLoading, runAsync: getHelloAsync } = useRequest(
    simpleReq.getHelloUser,
    { manual: true },
  );
  const onInputChange = (event: any) => {
    setInputName(event.target.value);
  };
  const onSubmitHello = async () => {
    try {
      const result = await getHelloAsync(inputName);
      console.log(result);
      setGreatResult(result.data);
    } catch (e) {
      console.error(e);
      setGreatResult('error');
    }
  };
  return (
    <div>
      <h2>ahooks</h2>
      <Button type="primary" onClick={onButtonClick}>
        {loading ? 'loading' : text}
      </Button>
      <Input value={inputName} onChange={onInputChange} />
      <Button onClick={onSubmitHello}>
        {getHelloLoading ? 'loading' : 'greeting'}
      </Button>
      <span>{greatResult}</span>
    </div>
  );
}
