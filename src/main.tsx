import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'modern-normalize/modern-normalize.css'
import './main.css';

async function enableMocking() {
  const { worker } = await import('./mocks/browser');
  return worker.start();
}

// const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 1 } } });
const queryClient = new QueryClient();
enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode> // Eliminado para evitar doble montado del componente en desarrollo para explicar mejor las peticiones antes de react query.
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    // </React.StrictMode>,
  );
});
