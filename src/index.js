import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ContextBlock } from './components/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextBlock>
      <App />
    </ContextBlock>
  </React.StrictMode>
);
