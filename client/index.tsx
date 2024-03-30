import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import { Auth0Provider } from '@auth0/auth0-react'

const queryClient = new QueryClient()

const router = createBrowserRouter(routes)

const root = createRoot(document.getElementById('app') as HTMLElement)

root.render(
  <Auth0Provider
    domain="harakeke24-haruka.au.auth0.com"
    clientId="kKCmBrwLirAbQOl35xGciUNhPyakB1H2"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: 'https://trials/api',
    }}
  >
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </Auth0Provider>
)
