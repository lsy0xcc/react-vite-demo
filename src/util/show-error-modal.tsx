import { CloseCircleFilled } from '@ant-design/icons';
import { Modal, ModalFuncProps } from 'antd';

// the other params which default params can not change
interface ErrorModalOtherParam {
  titleBold?: boolean;
}
export default (props: ModalFuncProps, otherProps?: ErrorModalOtherParam) => {
  const { confirm } = Modal;

  // set the default props
  const myDefaultProps: ModalFuncProps = {
    // modalRender: () => defaultContent,
    title: 'title',
    content: <div> content </div>,
    closeIcon: <CloseCircleFilled />,
    icon: null,
    centered: true,
    closable: true,
    maskClosable: false,
    className: 'default-modal',
    wrapClassName: 'default-modal-wrap',
  };
  // merge two props
  const myProps: ModalFuncProps = {
    ...myDefaultProps,
    ...props,
  };
  // if otherPros exists set other props
  if (otherProps) {
    myProps.className = `${myProps.className} ${
      otherProps.titleBold ? '' : 'default-modal-title-normal'
    }`;
  }

  return confirm(myProps);
};
