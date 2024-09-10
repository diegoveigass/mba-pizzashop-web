import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">

        <Toaster richColors />
        <Helmet titleTemplate="%s | pizzashop" />
        <RouterProvider router={router} />
      </ThemeProvider>

    </HelmetProvider>
  )
}
