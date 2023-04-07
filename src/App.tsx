import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from '@pages/root'
import Home from '@pages/home'
import MyRecord from '@pages/my-record'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/my-record',
        element: <MyRecord />,
      },
    ],
  },
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App
