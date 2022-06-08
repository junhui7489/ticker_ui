import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Source1Provider from './contexts/Source1Context';
import Source2Provider from './contexts/Source2Context';
import Source3Provider from './contexts/Source3Context';
import UseSourcesProvider from './contexts/useSourcesContext';
import UseTickerProvider from './contexts/useTickerContext';

const root = ReactDOM.createRoot(document.getElementById('root') || document.createElement('div'),);
root.render(
  <React.StrictMode>
    <UseSourcesProvider>
      <UseTickerProvider>
        <Source1Provider>
          <Source2Provider>
            <Source3Provider>
              <App />
            </Source3Provider>
          </Source2Provider>
        </Source1Provider>
      </UseTickerProvider>
    </UseSourcesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
