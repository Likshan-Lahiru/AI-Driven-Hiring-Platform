import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home.page.jsx'
import SignInPage from './pages/sign-in.page'
import SignUpPage from './pages/sign-up.page'

const router = createBrowserRouter([
  {
    path:"/",
    element: <HomePage />,  
  },
  {
    path: "/sign-in",
    element: <SignInPage />
  },
  {
    path: "/sign-up",
    element: <SignUpPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
