import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export default function AuthGuard(props: { children: ReactNode }) {
  const { children } = props;
  return localStorage.getItem('access_token') === null ? (
    <Navigate to="/login" />
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  );
}
