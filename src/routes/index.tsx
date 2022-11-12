import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Main from '../layouts/Main';
import About from '../pages/About';
import CommonError from '../pages/CommonError';
import Login from '../pages/Login';
import Playground from '../pages/Playground';
import AuthGuard from './guard/Auth.guard';

export default function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} errorElement={<CommonError />}>
          <Route path="" element={<Navigate to="/playground" replace />} />
          <Route path="playground" element={<Playground />} />
          <Route
            path="about"
            element={
              <AuthGuard>
                <About />
              </AuthGuard>
            }
          />
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Route>
        {/* <Route path="*" element={<Navigate to="/about" replace />} /> */}
      </Route>,
    ),
    {
      basename: import.meta.env.BASE_URL,
    },
  );
  return <RouterProvider router={router} />;
}
