import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

import App from '../src/App.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </StrictMode>
);
