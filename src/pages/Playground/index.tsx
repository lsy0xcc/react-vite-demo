import AhooksRequest from './components/AhooksRequest';
import CustomModal from './components/CustomModal';
import FilterHook from './components/FilterHook';
import SlideBarRedux from './components/SlideBarRedux';
import style from './index.module.css';

export default function Users() {
  return (
    <div className={style.mainContainer}>
      <h1>Playground</h1>
      <h2>env</h2>
      <div>{JSON.stringify(import.meta.env)}</div>
      <AhooksRequest />
      <CustomModal />
      <SlideBarRedux />
      <FilterHook />
    </div>
  );
}
