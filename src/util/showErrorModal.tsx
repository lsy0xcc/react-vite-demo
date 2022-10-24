import { CloseCircleFilled } from '@ant-design/icons';
import { Modal, ModalFuncProps } from 'antd';
import CommomError from '../component/error-modal/CommomError';
import TitleBoldError from '../component/error-modal/TitleBoldError';
import ErrorModalType from './ErrorModalType';

// the other params which default params can not change
interface ErrorModalOtherParam {
  titleBold?: boolean;
}
// set the default props
const myDefaultProps: ModalFuncProps = {
  // modalRender: () => defaultContent,
  closeIcon: <CloseCircleFilled />,
  icon: null,
  centered: true,
  closable: true,
  maskClosable: false,
  className: 'default-modal',
  wrapClassName: 'default-modal-wrap',
};

function getModalContent(errorModalType: ErrorModalType) {
  switch (errorModalType) {
    case ErrorModalType.TITLE_BOLD_ERROR:
      return <TitleBoldError />;
    default:
      return <CommomError />;
  }
}
export default (
  errorModalType?: ErrorModalType,
  props?: ModalFuncProps,
  otherProps?: ErrorModalOtherParam,
) => {
  const { confirm } = Modal;

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
  if (!myProps.content) {
    if (errorModalType) {
      myProps.content = getModalContent(errorModalType);
    } else {
      myProps.content = <CommomError />;
    }
  }

  return confirm(myProps);
};
