import { Button } from 'antd';
import ErrorModalType from '../../../util/ErrorModalType';
import showErrorModal from '../../../util/showErrorModal';

export default function customModal() {
  const showMyModal = () => {
    showErrorModal(ErrorModalType.COMMON_ERROR, { title: 'error' }, {});
  };
  const showMyModalWithProp = () => {
    showErrorModal(
      ErrorModalType.TITLE_BOLD_ERROR,
      { title: 'bold' },
      { titleBold: true },
    );
  };
  return (
    <div>
      <h2>modal</h2>
      <Button onClick={showMyModal}>show error modal with bold title</Button>
      <Button onClick={showMyModalWithProp}>
        show error modal with normal title
      </Button>
    </div>
  );
}
