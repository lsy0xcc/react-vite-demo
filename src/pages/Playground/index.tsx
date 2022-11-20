import Button from '@mui/material/Button';
import style from './index.module.css';

export default function Users() {
  return (
    <div className={style.mainContainer}>
      <h1>Playground</h1>
      <h2>env</h2>
      <div>{JSON.stringify(import.meta.env)}</div>
      <div>
        <Button variant="contained">Hello World</Button>
      </div>
    </div>
  );
}
