import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Root/Home/Home';
import Jobs from './Components/Jobs/Jobs';
import Statictis from './Components/Statictis/Statictis';
import AppliedJobs from './Components/Applied-Jobs/AppliedJobs';
import Blogs from './Components/Blogs/Blogs';
import Error from './Components/ErrorPage/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <Error></Error>,
    children :[
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path:"/jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/statictis",
        element: <Statictis></Statictis>
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
