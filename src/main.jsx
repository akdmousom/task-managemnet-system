import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/PublicRoute/Router.jsx'
import AuthProvider from './AuthContext/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster/>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={Router}>

        </RouterProvider>
      </AuthProvider>
    </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
