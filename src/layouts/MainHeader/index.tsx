import { useAppSelector } from '../../store/hooks';

export default function MainHeader() {
  const count = useAppSelector((store) => store.unread.value);
  return (
    <div>
      <span>header</span>
      <span>{count}</span>
    </div>
  );
}
