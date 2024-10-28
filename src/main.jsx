import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home/home.page'
import SignInPage from './pages/sign-in.page'
import SignUpPage from './pages/sign-up.page'
import "./index.css";
import JobPage from './pages/job/job.page'
import RootLayout from './layouts/root.layouts'
import { ClerkProvider } from '@clerk/clerk-react'
import MainLayout from './layouts/main.layout'
import AdminLayout from './layouts/admin.layout'
import AdminJobCreatePage from './pages/admin/admin.job-create.page'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/job/:_id",
            element: <JobPage />,
          },
          {
            path: "/",
            element: <HomePage />,
          },
        ],
      },
      {
        element: <AdminLayout />,
        children: [
          {
            path: "admin/jobs/create",
            element: <AdminJobCreatePage />,
          },
        ],
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
