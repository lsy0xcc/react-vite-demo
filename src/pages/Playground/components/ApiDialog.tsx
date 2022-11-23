import Button from '@mui/material/Button';
import { useState } from 'react';
import useDialog from '../../../hooks/useDialog';

export default function ApiDialog() {
  const { openDialog } = useDialog();
  const [count, setCount] = useState(0);

  const openMyDialog = () => {
    openDialog({
      title: 'Add One',
      content: (
        <div>
          <h2>Do you want to add one?</h2>
        </div>
      ),
      onClose: () => {
        console.log('close');
      },
      okText: 'yes',
      onOk: () => {
        setCount(count + 1);
      },
      cancelText: 'no',
      onCancel: () => {
        setCount(0);
      },
    });
  };

  return (
    <div>
      <h2>Create Dialog by Hooks</h2>
      <Button variant="contained" onClick={openMyDialog}>
        Hello World {count}
      </Button>
    </div>
  );
}
