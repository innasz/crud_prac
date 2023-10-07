import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/:postId',
    element: <Detail />,
  },
]);

export default router;
