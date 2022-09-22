import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import About from '../pages/About';
import Users from '../pages/Users';
import Videos from '../pages/Videos';

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/user" replace={true}></Navigate>,
    },
    {
      path: '/user',
      element: <Users></Users>,
    },
    {
      path: '/about',
      element: <About></About>,
    },
    {
      path: 'videos',
      element: <Videos></Videos>,
    },
  ]);
  return <RouterProvider router={router} />;
}
