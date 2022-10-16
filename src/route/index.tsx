import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Main from '../layout/Main';
import About from '../page/About';
import CommonError from '../page/CommonError';
import Login from '../page/Login';
import Users from '../page/Users';
import AuthGuard from './guard/Auth.guard';

export default function Routes() {
  // const router = createBrowserRouter([
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} errorElement={<CommonError />}>
          <Route path="" element={<Navigate to="/about" replace />} />
          <Route
            path="users"
            element={
              <AuthGuard>
                <Users />
              </AuthGuard>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}
