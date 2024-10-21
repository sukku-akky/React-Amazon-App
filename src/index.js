import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './store/auth-context';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './store/productcontext';
import { Provider } from 'react-redux';
import store from './store/reduc.store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  
    <AuthContextProvider>
    <AppProvider>
    <App />
    </AppProvider>
    </AuthContextProvider>
  </Provider>
  
  
);


