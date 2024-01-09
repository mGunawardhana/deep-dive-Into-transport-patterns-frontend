import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import UserManagement from 'src/views/user-management/UserManagement';
import SignInAndUp from '../views/sign-in-and-up/SignInAndUp';
import FirstChart from '../views/charts/FirstChart';
import SecondChart from '../views/charts/SecondChart';
import ThirdChart from '../views/charts/ThirdChart';
/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')));
// const Icons = Loadable(lazy(() => import('../views/icons/Icons')));
// const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')));
// const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));

const Router = [
  {
    path: '/system',
    element: <FullLayout />,
    children: [
      { path: '', element: <Navigate to="/system" /> },
      { path: 'dashboard', exact: true, element: <Dashboard /> },
      { path: 'chart', exact: true, element: <FirstChart /> },
      { path: 'chart-two', exact: true, element: <SecondChart /> },
      { path: 'chart-three', exact: true, element: <ThirdChart /> },
      { path: 'user', exact: true, element: <UserManagement /> },
      { path: 'sign-up', exact: true, element: <SignInAndUp /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/', element: <Navigate to="/sign-in" /> },
      { path: '/sign-in', exact: true, element: <SignInAndUp /> },
      { path: '404', element: <Error /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
