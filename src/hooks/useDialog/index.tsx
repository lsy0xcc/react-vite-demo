import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { css } from '@emotion/react';
import { useMap } from 'ahooks';
import { createContext, ReactElement, useContext, useMemo } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import { v4 as uuidv4 } from 'uuid';

const titleContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DialogContext = createContext({
  openDialog: (options: DialogConfig) => {
    console.log('open', options);
  },
});
export interface DialogConfig {
  title?: ReactElement | string;
  content?: ReactElement | string;
  onOk?: Function;
  onCancel?: Function;
  onClose?: Function;
  okText?: string;
  cancelText?: string;
}
interface DialogStorage extends DialogConfig {
  isOpen: boolean;
}

const useDialog = () => useContext(DialogContext);
export default useDialog;

export function DialogProvider(props: { children: ReactElement }) {
  const { children } = props;
  const [map, { set, remove, get }] = useMap<string, DialogStorage>();

  const onOk = (key: string) => {
    const result = get(key);
    if (result) {
      result.onOk?.();
      result.onClose?.();
      set(key, { ...result, isOpen: false });
    }
    setInterval(() => {
      remove(key);
    }, 1000);
  };
  const onCancel = (key: string) => {
    const result = get(key);
    if (result) {
      result.onCancel?.();
      result.onClose?.();
      set(key, { ...result, isOpen: false });
    }
    setInterval(() => {
      remove(key);
    }, 1000);
  };
  const onClose = (key: string) => {
    const result = get(key);
    if (result) {
      result.onClose?.();
      set(key, { ...result, isOpen: false });
    }
    setInterval(() => {
      remove(key);
    }, 1000);
  };

  const openDialog = useMemo(
    () => ({
      openDialog: (options: DialogConfig) => {
        set(uuidv4(), { ...options, isOpen: true });
      },
    }),
    [set],
  );

  return (
    <DialogContext.Provider value={openDialog}>
      {children}
      {Array.from(map).map(([key, dialog]) => (
        <Dialog open={dialog.isOpen} key={key}>
          <DialogTitle css={titleContainer}>
            {dialog.title}
            <IconButton onClick={() => onClose(key)}>
              <CancelIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>{dialog.content}</DialogContent>
          <DialogActions>
            {(dialog.okText || dialog.onOk) && (
              <Button onClick={() => onOk(key)}>{dialog.okText ?? 'ok'}</Button>
            )}
            {(dialog.cancelText || dialog.onCancel) && (
              <Button onClick={() => onCancel(key)}>
                {dialog.cancelText ?? 'cancel'}
              </Button>
            )}
          </DialogActions>
        </Dialog>
      ))}
    </DialogContext.Provider>
  );
}
