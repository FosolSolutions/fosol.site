import {
  AboutUs,
  Career,
  Careers,
  ClientStories,
  ContactUs,
  Home,
  Resume,
  Services,
  Start,
  Stories,
} from '@/features'
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
    path: '/clients/stories/:id',
    element: (
      <DefaultLayout>
        <Stories />
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
  {
    path: '/careers/openings/:id',
    element: (
      <DefaultLayout>
        <Career />
      </DefaultLayout>
    ),
  },
  {
    path: '/contact-us',
    element: (
      <DefaultLayout>
        <ContactUs />
      </DefaultLayout>
    ),
  },
  {
    path: '/start',
    element: (
      <DefaultLayout>
        <Start />
      </DefaultLayout>
    ),
  },
  {
    path: '/resume',
    element: (
      <DefaultLayout>
        <Resume />
      </DefaultLayout>
    ),
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
