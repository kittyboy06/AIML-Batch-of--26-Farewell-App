import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

import Home from './pages/Home.tsx'
import Album from './pages/Album.tsx'
import HallOfFame from './pages/HallOfFame.tsx'
import TributeWall from './pages/TributeWall.tsx'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/album',
        element: <Album />,
      },
      {
        path: '/hall-of-fame',
        element: <HallOfFame />,
      },
      {
        path: '/tributes',
        element: <TributeWall />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
