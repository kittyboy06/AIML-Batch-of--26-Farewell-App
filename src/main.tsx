import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Placeholder imports for pages we will create next
import Home from './pages/Home.tsx'
import Timeline from './pages/Timeline.tsx'
import HallOfFame from './pages/HallOfFame.tsx'
import TributeWall from './pages/TributeWall.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/timeline',
        element: <Timeline />,
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
