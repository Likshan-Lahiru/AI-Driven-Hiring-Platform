import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home/home.page'
import SignInPage from './pages/sign-in.page'
import SignUpPage from './pages/sign-up.page'
import "./index.css";
import JobPage from './pages/job/job.page'
import RootLayout from './layouts/root.layouts'

const router = createBrowserRouter([
  { 
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/job/:_id",
        element: <JobPage />,
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
