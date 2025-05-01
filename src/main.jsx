import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home/Home.jsx'
import Root from './Layouts/Root.jsx'
import Login from './Pages/Login/Login.jsx'
import Register from './Pages/Register/Register.jsx'
import AuthProvider from './Contexts/AuthProvider.jsx'
import Order from './Pages/Order/Order.jsx'
import PrivateRoutes from './Routes/PrivateRoutes/PrivateRoutes.jsx'
import Profile from './Pages/Profile/Profile.jsx'

const router = createBrowserRouter([
  {
    path: '',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: 'order',
        element: <PrivateRoutes>
          <Order></Order>
        </PrivateRoutes>
      },
      {
        path: 'profile',
        element: <PrivateRoutes>
          <Profile></Profile>
        </PrivateRoutes>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
