import { Button, Slider } from 'antd';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { updateValue } from '../../store/slicer/unreadSlicer';
import ErrorModalType from '../../util/ErrorModalType';
import showErrorModal from '../../util/showErrorModal';
import AhooksRequest from './component/ahooksRequest';
import style from './index.module.css';

export default function Users() {
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

  const count = useAppSelector((state) => state.unread.value);
  const dispatch = useAppDispatch();
  const onSliderChange = (value: number) => {
    dispatch(updateValue(value));
  };

  return (
    <div>
      <div className={style.mainContainer}>
        <h1>Playground</h1>
        <AhooksRequest />

        <div>
          <h2>modal</h2>
          <Button onClick={showMyModal}>
            show error modal with bold title
          </Button>
          <Button onClick={showMyModalWithProp}>
            show error modal with normal title
          </Button>
        </div>

        <div>
          <h2>
            redux
            {count}
          </h2>
          <Slider onChange={onSliderChange} />
        </div>
      </div>
    </div>
  );
}
