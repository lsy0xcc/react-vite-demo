import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import About from '../page/About';
import Users from '../page/Users';

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/about" replace={true}></Navigate>,
    },
    {
      path: '/user',
      element: <Users></Users>,
    },
    {
      path: '/about',
      element: <About></About>,
    },
  ]);
  return <RouterProvider router={router} />;
}
