import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import New from './pages/New';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/:postId',
    element: <Detail />,
  },
  {
    path: '/new',
    element: <New />,
  },
]);

export default router;
