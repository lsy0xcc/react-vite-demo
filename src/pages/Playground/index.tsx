import { css } from '@emotion/react';
import Button from '@mui/material/Button';

const mainContainer = css`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 16px;
`;
export default function Playground() {
  return (
    <div css={mainContainer}>
      <h1>Playground</h1>
      <h2>env</h2>
      <div>{JSON.stringify(import.meta.env)}</div>
      <div>
        <Button variant="contained">Hello World</Button>
      </div>
    </div>
  );
}
