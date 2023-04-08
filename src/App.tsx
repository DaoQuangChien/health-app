import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from '@pages/root'
import Home from '@pages/home'
import MyRecord from '@pages/my-record'
import Column from '@pages/column'

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
      {
        path: '/column',
        element: <Column />,
      },
    ],
  },
])
const App = () => {
  return <RouterProvider router={router} />
}

export default App
