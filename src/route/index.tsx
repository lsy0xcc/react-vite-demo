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
import Playground from '../page/Playground';
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
