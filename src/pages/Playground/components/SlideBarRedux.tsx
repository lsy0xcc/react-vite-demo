import { Slider } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { updateValue } from '../../../store/slicer/unreadSlicer';

export default function SlideBarRedux() {
  const count = useAppSelector((state) => state.unread.value);
  const dispatch = useAppDispatch();
  const onSliderChange = (value: number) => {
    dispatch(updateValue(value));
  };
  return (
    <div>
      <h2>
        redux
        {count}
      </h2>
      <Slider onChange={onSliderChange} />
    </div>
  );
}
