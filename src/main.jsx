import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ErrorBoundary from './ErrorBoundary.jsx';
import FallbackLoader from './FallbackLoader.jsx';

const App = lazy(() => import('./App.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ErrorBoundary>
      <Suspense fallback={<FallbackLoader />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>,
)
