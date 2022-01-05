import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { FeedbackProvider } from './Context/FeedbackContext';
import './index.css';

render(
  <React.StrictMode>
    <FeedbackProvider>
      <App />
    </FeedbackProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
