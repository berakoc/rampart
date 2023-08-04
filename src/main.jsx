import ReactDOM from 'react-dom/client';
import './index.css';
import { StrictMode } from 'react';
import { MantineProvider } from '@mantine/core';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </StrictMode>,
);
