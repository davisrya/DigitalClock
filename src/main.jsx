import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Digital from './Digital';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Digital />
  </StrictMode>,
)
