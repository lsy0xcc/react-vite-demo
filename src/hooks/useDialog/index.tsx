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

  const onConfirm = (key: string) => {
    const result = get(key);
    if (result) {
      if (result.onOk) {
        result.onOk();
      }
      if (result.onClose) {
        result.onClose();
      }
      set(key, { ...result, isOpen: false });
    }
    setInterval(() => {
      remove(key);
    }, 1000);
  };
  const onCancel = (key: string) => {
    const result = get(key);
    if (result) {
      if (result.onCancel) {
        result.onCancel();
      }
      if (result.onClose) {
        result.onClose();
      }
      set(key, { ...result, isOpen: false });
    }
    setInterval(() => {
      remove(key);
    }, 1000);
  };
  const onClose = (key: string) => {
    const result = get(key);
    if (result) {
      if (result.onClose) {
        result.onClose();
      }
      set(key, { ...result, isOpen: false });
    }
    setInterval(() => {
      remove(key);
    }, 1000);
  };

  const openDialog = useMemo(
    () => ({
      openDialog: (options: DialogConfig) => {
        set(new Date().toISOString(), { ...options, isOpen: true });
      },
    }),
    [set],
  );

  return (
    <DialogContext.Provider value={openDialog}>
      {children}
      {Array.from(map).map(([key, dialog]) => (
        <Dialog open={dialog.isOpen} key={key}>
          <DialogTitle>
            <div css={titleContainer}>
              <span>{dialog.title}</span>
              <IconButton onClick={() => onClose(key)}>
                <CancelIcon />
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent>{dialog.content}</DialogContent>
          <DialogActions>
            {dialog.okText && (
              <Button onClick={() => onConfirm(key)}>{dialog.okText}</Button>
            )}
            {dialog.cancelText && (
              <Button onClick={() => onCancel(key)}>{dialog.cancelText}</Button>
            )}
          </DialogActions>
        </Dialog>
      ))}
    </DialogContext.Provider>
  );
}
