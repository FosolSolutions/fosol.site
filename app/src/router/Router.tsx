import { AboutUs, Careers, ClientStories, Home, Services } from '@/features'
import { DefaultLayout } from '@/layouts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    ),
  },
  {
    path: '/services',
    element: (
      <DefaultLayout>
        <Services />
      </DefaultLayout>
    ),
  },
  {
    path: '/clients/stories',
    element: (
      <DefaultLayout>
        <ClientStories />
      </DefaultLayout>
    ),
  },
  {
    path: '/about-us',
    element: (
      <DefaultLayout>
        <AboutUs />
      </DefaultLayout>
    ),
  },
  {
    path: '/careers',
    element: (
      <DefaultLayout>
        <Careers />
      </DefaultLayout>
    ),
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
