import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

export default function AuthGuard(props: { children: ReactElement }) {
  const { children } = props;
  return localStorage.getItem('access_token') === null ? (
    <Navigate to="/login" />
  ) : (
    children
  );
}
