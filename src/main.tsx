import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import { Provider } from '@/components/ui/provider'
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Provider>
          <App />
      </Provider >
    </AuthProvider>
  </StrictMode>
)