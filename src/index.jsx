import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Shop from './Shop';
import Donate from './Donate';
import Comment from './Comment';
import Refunds from './Refunds';
import Home from './home';
import Signin from './Signin'

import {
  createBrowserRouter,
  RouterProvider,
} 
  from "react-router-dom";

const router = createBrowserRouter([
  
 
  {
    path: "/Donate",
    element: <Donate />,
  },
  {
    path: "/Shop",
    element: <Shop />,
  },
  {
    path: "/Comment",
    element: <Comment />,
  },
  {
    path: "/Refunds",
    element: <Refunds />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Signin />,
  },

  {
   path: "/App",
   element: <App />,

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
