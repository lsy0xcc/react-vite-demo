import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export default function Auth(props: { children: ReactNode }) {
  if (localStorage.getItem('access_token') !== null) {
    return <>{props.children}</>;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
}
