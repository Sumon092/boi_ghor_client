import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {RouterProvider } from 'react-router-dom'
import routes from './routes/routes.tsx'
import { TooltipProvider } from '@radix-ui/react-tooltip';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TooltipProvider>
    <RouterProvider router={routes}/>
    </TooltipProvider>
  </React.StrictMode>,
)
