import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/component/Root/Root.jsx';
import Home from './assets/component/Home/Home.jsx';
import Donations from './assets/component/Donations/Donations.jsx';
import Statistics from './assets/component/Statistics/Statistics.jsx';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element:<Home></Home> 
      },
      {
        path: "/donation",
        element:<Donations></Donations> 
      },
      {
        path: "/Statistics",
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
