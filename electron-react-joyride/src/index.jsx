import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
  
    root.render(
        <App />
    );
  }
//ReactDOM.render(<App />, document.getElementById('root'));
