import { Button } from 'antd';
import showErrorModal from '../../util/show-error-modal';
import style from './index.module.css';

export default function About() {
  const showMyModal = () => {
    showErrorModal({});
  };
  const showMyModalWithProp = () => {
    showErrorModal({}, { titleBold: false });
  };
  return (
    <div className={style.mainContainer}>
      About
      <Button onClick={showMyModal}> show error modal with bold title</Button>
      <Button onClick={showMyModalWithProp}>
        show error modal with normal title
      </Button>
    </div>
  );
}
