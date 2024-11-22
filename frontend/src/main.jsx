import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Panel from './Layout/Panel';
import Simulations from './Pages/Simulations/Simulations';
import CssBaseline from '@mui/material/CssBaseline';

// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Panel/>,
    children: [
      {
        path: "simulations",
        element: <Simulations/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline/>
    <RouterProvider router={router} />
  </StrictMode>,
)
