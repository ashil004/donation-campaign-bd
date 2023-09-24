import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './component/Root';
import Home from './Home';
import Donation from './Donation';
import Statistics from './Statistics';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/donation",
        element:<Donation></Donation>,
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)